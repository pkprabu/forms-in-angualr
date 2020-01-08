import { AbstractControl, ValidationErrors } from '@angular/forms'

export class CustomValidators {
  private cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    // if((control.value as string).indexOf(' ') >= 0) {
    //   return {
    //     cannotContainSpace: true
    //   }
    // }
    // return null;
  }
}