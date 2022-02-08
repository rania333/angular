import { AbstractControl } from "@angular/forms";

export function ConfirmPassValidator(controls: AbstractControl) {
  const pass = controls.get('pass');
  const pass2 = controls.get('pass2');
  if(pass?.pristine || pass2?.pristine) {
    return null
  } else {
  return pass && pass2 && pass.value !== pass2.value
  ? {'notEqual': true} : null;
  }
}
