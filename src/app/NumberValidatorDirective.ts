import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, FormControl } from '@angular/forms';
@Directive({
  selector: '[appNumberValidator] [ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NumberValidatorDirective,
      multi: true
    }
  ]
})

export class NumberValidatorDirective implements Validator {
  validator: ValidatorFn;
  constructor() {
    this.validator = this.numberValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
   }

   numberValidator(): ValidatorFn {
     return (c: FormControl) => {
       const isValid = /^\d+$/.test(c.value);
       if (isValid) {
        return null;
       } else {
          return {
            numbervalidator: {
              valid: false
            }
          };
       }
     };
   }

  registerOnValidatorChange?(fn: () => void): void {
  }
}
