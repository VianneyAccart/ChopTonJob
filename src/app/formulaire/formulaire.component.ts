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
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {departements} from '../shared/mocks/departements.mock';

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
  departments: string[];
  allDepartments: string[];
  zoom: any;

  // Used for API request
  latitude: any;
  longitude: any;
  requestDepartments: string[];
  distance: string | undefined;
  contract: string;
  romeCode: string;

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

  searchForm = this.fb.group(
    {
      inputDepartement: [''],
      inputRayon: [''],
      inputMetier: ['', Validators.required],
      inputAlternance: [''],
    },
    {validator: this.atLeastOne(Validators.required, ['inputRayon', 'inputDepartement'])}
  );

  constructor(private fb: FormBuilder) {
    this.contract = 'dpae';
    this.romeCode = '';
    this.localisationButtonColor = 'transparent';
    this.localisationButtonText = 'Être localisé';
    this.localisationButtonTextColor = '#aea2cd';
    this.departments = [];
    this.requestDepartments = [];
    this.allDepartments = departements;
    this.filteredDepartments = this.departmentCtrl.valueChanges.pipe(
      startWith(null),
      map((department: string | null) =>
        department ? this._filter(department) : this.allDepartments.slice()
      )
    );
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

  // Remove departments from the input
  remove(department: string): void {
    const index = this.departments.indexOf(department);
    if (index >= 0) {
      this.departments.splice(index, 1);
    }
  }

  // What happens when user select a department from the list
  selected(event: MatAutocompleteSelectedEvent): void {
    //Reset the button when adding a department and the localization is done
    if (this.departments.length === 0) this.resetButton();
    // Max chips is 5, user can't select more
    if (this.departments.length < 5) {
      this.departments.push(event.option.viewValue);
      if (this.departmentInput !== undefined) this.departmentInput.nativeElement.value = '';
      this.departmentCtrl.setValue(null);
      // Add transformed string in a new array used for API request
      this.requestDepartments = this.departments.map((department) => department.substring(0, 2));
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
      this.requestDepartments.splice(0, this.requestDepartments.length);
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
    this.distance = this.searchForm.get('inputRayon')?.value;
    this.romeCode = this.searchForm.get('inputMetier')?.value;
    alert(
      `https://api.emploi-store.fr/partenaire/labonneboite/v1/company/?departments=${this.requestDepartments}&distance=${this.distance}&latitude=${this.latitude}&longitude=${this.longitude}&rome_codes=${this.romeCode}&contract=${this.contract}`
    );
  }
}
