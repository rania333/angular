import { IUser } from './../app/viewmodels/iuser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { AbstractControl, ValidationErrors } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
export class ValidatorEmail {
  constructor(public userService: UserService) {

  }

  static ExistEmail(control: AbstractControl) :
  // Promise<ValidationErrors | null> {
  //   return new Promise((resolve, reject) => {
  //     AuthService.prototype.getMails(control.value)
  //     .subscribe(data => {
  //       if(data.length >=0) {
  //         resolve({'existMail': true})
  //       }
  //       else resolve(null)
  //     })
  //   })
  // }
  ValidationErrors | null {
    UserService.prototype.getMails().subscribe(data => {
      if(data.length >= 0 ) {
        return ({'existMail': true})
      } else {
        return null
      }
    })
    return null
  }
}
