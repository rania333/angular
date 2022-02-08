import { ValidatorEmail } from './../../validators/email';
import { UserService } from './../services/user.service';
import { IUser } from './../viewmodels/iuser';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { ConfirmPassValidator } from 'src/validators/ConfirmPass';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private _formBuilder: FormBuilder,
    private _router:Router , private userService: UserService,
    private authService: AuthService) {
    this.signupForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      pass2: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      phone: _formBuilder.array([this._formBuilder
        .control('', Validators.pattern('^(01)[012]{1,}[0-9]{8,}$'))]),
      address: _formBuilder.group({
        city: ['', [Validators.required]],
        code: ['', [Validators.required]],
        st: ['', [Validators.required]]
      })
    }, {validators: [ConfirmPassValidator]})
  }
  // [Validators.required, Validators.pattern('^01(012){1,1}[0-9]{8,8}$')]
  ngOnInit(): void {
  }

  //geter methods
  get phones(): FormArray {
    return this.signupForm.get('phone') as FormArray;
  }
  //handlers
  addPhone() {
    this.phones.push(this._formBuilder.control('', Validators.required))
  }
  removePhone(index: number) {
    this.phones.removeAt(index)
  }
  //validators
  isValidControl(name: string): Boolean {
    return (this.signupForm.controls[name].dirty &&
    this.signupForm.controls[name].invalid)
  }
  errorType(control: string, errType: string): Boolean {
    if((this.signupForm.controls[control].errors?.[errType])) {
        return true
      } else {
        return false
      }
  }

  submitHandler() {
    let userData: IUser = this.signupForm.value as IUser;
    this.userService.signup(userData)
    .subscribe(data => {
      alert(`you're signedUp suucessfully`)
      this._router.navigate(['/products']);
    })
    this.authService.login(userData.email, userData.pass)

    console.log(userData);


  }










  //dynamic validation
  setValidatorOnPhone() {
    this.signupForm.get('phone')?.valueChanges.subscribe(val => {
      const value = this.signupForm.get('phone');
      if(val) {
        value?.setValidators([Validators.required, Validators.pattern('^01(012){1,1}[0-9]{8,8}$')])
      } else {
        value?.clearValidators()
      }
      value?.updateValueAndValidity();
    })
  }

}
