import {AbstractControl, ValidationErrors} from '@angular/forms';

export function emailPatternValidator(control: AbstractControl): ValidationErrors | null {
  const emailPattern = RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
  const valid = emailPatternValidator(control.value);
  return valid
    ? null
    : {
        pattern: 'Entrez une adresse email valide',
      };
}
