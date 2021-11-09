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
  departments: string[] = [];
  allDepartments: string[];

  latitude: any;
  longitude: any;
  zoom: any;

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
      inputMetier: ['Choisir un métier', Validators.required],
      inputAlternance: [''],
    },
    {validator: this.atLeastOne(Validators.required, ['inputRayon', 'inputDepartement'])}
  );

  onSubmit() {
    console.log(this.searchForm.get('inputRayon')?.value);
    console.log(this.searchForm.get('inputDepartement')?.value);
  }

  constructor(private fb: FormBuilder) {
    this.localisationButtonColor = 'transparent';
    this.localisationButtonText = 'Être localisé';
    this.localisationButtonTextColor = '#aea2cd';
    this.allDepartments = departements;
    this.filteredDepartments = this.departmentCtrl.valueChanges.pipe(
      startWith(null),
      map((department: string | null) =>
        department ? this._filter(department) : this.allDepartments.slice()
      )
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our department
    // Max chips is 5, user can't select more
    if (value && this.departments.length < 5) {
      this.departments.push(value);
    }

    // Clear the input value
    event.chipInput?.clear();
    this.departmentCtrl.setValue(null);
  }

  remove(department: string): void {
    const index = this.departments.indexOf(department);
    if (index >= 0) {
      this.departments.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    //Reset the button when adding a department and the localization is done
    if (this.departments.length === 0) this.resetButton();
    // Max chips is 5, user can't select more
    if (this.departments.length < 5) {
      this.departments.push(event.option.viewValue);
      if (this.departmentInput !== undefined) this.departmentInput.nativeElement.value = '';
      this.departmentCtrl.setValue(null);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allDepartments.filter((department) =>
      department.toLowerCase().includes(filterValue)
    );
  }

  // Allows you to reset the original button when a department is selected
  resetButton(): void {
    // reset the ray of <select>
    this.searchForm.controls['inputRayon'].reset('');
    // If they excite, make latitude and longitude undefined
    if (this.latitude !== undefined && this.longitude !== undefined) {
      this.latitude = undefined;
      this.longitude = undefined;

      //Reset button to default values
      this.localisationButtonText = 'Être localisé';
      this.localisationButtonColor = 'transparent';
      this.localisationButtonTextColor = '#aea2cd';
    }
  }

  //If a ray is selected, the selected departments are deleted
  resetRayon($event: any): void {
    if ($event !== undefined) {
      this.departments.splice(0, this.departments.length);
    }
  }

  // Get user current location (enable geolocalisation from browser)
  getUserLocation() {
    // change the button's text
    this.localisationButtonText = 'En cours...';
    // Supprime les départements sélectionnés quand on clique sur Être localisé
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
        console.log('position valid', position);
      });
    } else {
      console.log('position failed');
    }
  }
}
