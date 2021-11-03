import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
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
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  departmentCtrl = new FormControl();
  filteredDepartments: Observable<string[]>;
  departments: string[] = [];
  allDepartments: string[];

  @ViewChild('departmentInput') departmentInput: ElementRef<HTMLInputElement> | undefined;

  constructor() {
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
    if (value) {
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
    this.departments.push(event.option.viewValue);
    if (this.departmentInput !== undefined) this.departmentInput.nativeElement.value = '';
    this.departmentCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allDepartments.filter((department) =>
      department.toLowerCase().includes(filterValue)
    );
  }
}
