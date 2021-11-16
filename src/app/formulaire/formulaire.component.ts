import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Router} from '@angular/router';
import {AuthGuard} from '../shared/guards/auth.guard';
import {departements} from '../shared/mocks/departements.mock';
import {Request} from '../shared/models/Request.model';
import {CompanyService} from '../shared/services/company.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent {
  localisationButtonText: string;
  localisationButtonColor: string;
  localisationButtonTextColor: string;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  departmentCtrl = new FormControl();
  filteredDepartments: string[];
  departments: string[];
  allDepartments: string[];
  zoom: any;

  // Used for API request
  request: string;
  latitude: any;
  longitude: any;
  selectedDepartments: string[];
  distance: string | undefined;
  contract: string;
  romeCode: string;
  pageSize: number;
  page: number;

  @ViewChild('departmentInput') departmentInput: ElementRef<HTMLInputElement> | undefined;
  // Fonction qui vérifie qu'au moins 1 des inputs est rempli.
  atLeastOne =
    (validator: ValidatorFn, controls: string[]) =>
    (group: FormGroup): ValidationErrors | null => {
      if (!controls) {
        controls = Object.keys(group.controls);
      }

      const hasAtLeastOne =
        group && group.controls && controls.some((k) => !validator(group.controls[k]));

      return hasAtLeastOne
        ? null
        : {
            atLeastOne: true,
          };
    };

  /*
  private _request: string;
  private _latitude: any;
  private _longitude: any;
  private _selectedDepartments: string[];
  private _distance: string;
  private _contract: string;
  private _romeCode: string;
  private _pageSize: number;
  private _page: number;


  
    */
  searchForm = this.fb.group(
    {
      inputDepartement: [''],
      inputRayon: [''],
      inputMetier: ['', Validators.required],
      inputAlternance: [''],
    },
    {validator: this.atLeastOne(Validators.required, ['inputRayon', 'inputDepartement'])}
  );

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private companyService: CompanyService,
    private authGuard: AuthGuard
  ) {
    this.page = 1;
    this.pageSize = 100;
    this.romeCode = '';
    this.request = '';
    this.contract = 'dpae';
    this.localisationButtonColor = 'transparent';
    this.localisationButtonText = 'Être localisé';
    this.localisationButtonTextColor = '#aea2cd';
    this.departments = [];
    this.selectedDepartments = [];
    this.allDepartments = departements;
    this.filteredDepartments = this.allDepartments;
  }

  // Add departments on the input
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Max departments is 5, user can't select more
    if (value && this.departments.length < 5) {
      this.departments.push(value);
    }
    // Clear the input value
    event.chipInput?.clear();
    this.departmentCtrl.setValue(null);
  }

  // Remove departments from the input and push them in allDepartments
  remove(department: string): void {
    const index = this.departments.indexOf(department);
    if (index >= 0) {
      this.departments.splice(index, 1);
      this.allDepartments.unshift(department);
      //Sort the allDepartments array
      this.allDepartments.sort(function (a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });
    }
  }

  // What happens when user select a department from the list
  selected(event: MatAutocompleteSelectedEvent): void {
    // Reset the button when adding a department and the localization is done
    if (this.departments.length === 0) this.resetButton();
    // Max chips is 5, user can't select more
    if (this.departments.length < 5) {
      this.departments.push(event.option.viewValue);
      // Remove department from list when added
      const indexAllDepartments = this.allDepartments.indexOf(event.option.viewValue);
      this.allDepartments.splice(indexAllDepartments, 1);
      if (this.departmentInput !== undefined) this.departmentInput.nativeElement.value = '';
      this.departmentCtrl.setValue(null);
      // Add transformed string in a new array used for API request
      this.selectedDepartments = this.departments.map((department) => department.substring(0, 2));
    }
  }

  // Allows user to reset localisation and ray when a department is selected
  resetButton(): void {
    // reset the ray of <select>
    this.searchForm.controls['inputRayon'].reset('');
    // If they exist, make latitude and longitude empty string
    if (this.latitude !== '' && this.longitude !== '') {
      this.latitude = '';
      this.longitude = '';

      //Reset button to default values
      this.localisationButtonText = 'Être localisé';
      this.localisationButtonColor = 'transparent';
      this.localisationButtonTextColor = '#aea2cd';
    }
  }

  // If a ray is selected, the selected departments are removed
  resetRayon($event: any): void {
    if ($event !== undefined) {
      // Remove departments from list
      this.departments.splice(0, this.departments.length);
      // Remove departments from request list too
      this.selectedDepartments.splice(0, this.selectedDepartments.length);
    }
  }

  // Get user current location (enable geolocalisation from browser)
  getUserLocation() {
    // Change the button's text
    this.localisationButtonText = 'En cours...';
    // Remove selected departments when user clicks on "Être localisé"
    this.departments.splice(0, this.departments.length);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 16;

        // Change button text and style
        this.localisationButtonText = 'Localisation acquise';
        this.localisationButtonColor = '#aea2cd';
        this.localisationButtonTextColor = 'white';
      });
    } else {
      alert("Echec dans l'obtention de la localisation, veuillez réessayer");
    }
  }
  // Change content of contract variable between "dpae" and "alternance" if checkbox is checked or not
  isChecked(event: any) {
    event.target.checked ? (this.contract = 'alternance') : (this.contract = 'dpae');
  }

  // What happens when searchform is sent
  onSubmit() {
    // Allow access to result component (blocked by default)
    this.authGuard.canAccess = true;
    this.distance = this.searchForm.get('inputRayon')?.value;
    this.romeCode = this.searchForm.get('inputMetier')?.value;

    // What we'll send to CompanyService (Request type needed)
    const requestParameters = new Request(
      this.contract,
      this.romeCode,
      this.latitude,
      this.longitude,
      this.selectedDepartments,
      this.distance
    );

    // Call getCompanies method from CompanyService. Send requestParameters (type Request) to CompanyService
    this.companyService.getCompanies(requestParameters);
    // Navigate to result component
    this.router.navigate(['/result']);

    //reset departments array on submit to have complete list of departments for new search
    this.allDepartments.unshift(...this.departments);

    this.allDepartments.sort(function (a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
   
   
  }
}
