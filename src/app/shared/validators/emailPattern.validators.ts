import {AbstractControl, ValidationErrors} from '@angular/forms';

export function emailPatternValidator(control: AbstractControl): ValidationErrors | null {
    const referencePattern : RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    const valid = emailPatternValidator.test(control.value);
    return valid
      ? null
      : {
          pattern: 'Entrez une adresse email valide',
        };
}
