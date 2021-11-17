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
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AuthGuard} from '../shared/guards/auth.guard';
import {Request} from '../shared/models/Request.model';
import {CompanyService} from '../shared/services/company.service';
import {DepartmentsService} from '../shared/services/departments.service';

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
  filteredDepartments: Observable<string[]>;
  departments: string[]; // Selected department(s)
  allDepartments: string[]; // List of departments

  @ViewChild('departmentInput') departmentInput: ElementRef<HTMLInputElement> | undefined;

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
  requestInfo: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private companyService: CompanyService,
    private authGuard: AuthGuard,
    private departmentsService: DepartmentsService
  ) {
    this.filteredDepartments = this.departmentCtrl.valueChanges.pipe(
      startWith(null),
      map((department: string | null) =>
        department ? this._filter(department) : this.allDepartments.slice()
      )
    );
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
    this.allDepartments = [];
    // Call the departments.json which is list of departments
    this.departmentsService.getDepartments().subscribe((response) => {
      this.allDepartments = response;
    });
  }

  searchForm = this.fb.group({
    inputDepartement: [''],
    inputRayon: [''],
    inputMetier: ['', Validators.required],
    inputAlternance: [''],
  });

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
      // Then, add removed department to the allDepartments list
      this.allDepartments.unshift(department);
      // Then sort allDepartments array
      this.allDepartments.sort(function (a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });
      //
      this.departmentCtrl.reset();
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

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allDepartments.filter((department) =>
      department.toLowerCase().includes(filterValue)
    );
  }

  // Allows user to reset localisation and ray when a department is selected
  resetButton(): void {
    // reset the ray of <select>
    this.searchForm.controls['inputRayon'].reset('');
    // If they exist, make latitude and longitude empty string
    if (this.latitude !== undefined && this.longitude !== undefined) {
      this.latitude = undefined;
      this.longitude = undefined;

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
  }
}
