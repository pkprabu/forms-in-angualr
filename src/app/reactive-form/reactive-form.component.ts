import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { CustomValidators } from '../custom-validators/cannot-contain-space';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
})
export class ReactiveForm implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  form = new FormGroup({
    firstName: new FormControl(
      null, 
      [
        Validators.required, 
        Validators.minLength(4),
        CustomValidators.cannotContainSpace
      ]
    ),
    middleName: new FormControl(),
    lastName: new FormControl(
      null,
      [
        Validators.required,
        Validators.minLength(2)
      ]
    ),
    companyName: new FormControl(
      null, 
      [
        Validators.required,
        Validators.minLength(4)
      ]
    ),
    designation: new FormControl(),
    companyDesc: new FormControl(
      null,
      [
        Validators.required,
        Validators.minLength(50),
        Validators.maxLength(500)
      ]
    ),
    address: new FormControl(),
    city: new FormControl(),
    district: new FormControl(),
    pin: new FormControl()
      
  })
  get firstName() {
    return this.form.get('firstName');
  }
  get lastName() {
    return this.form.get('lastName');
  }
  get companyName() {
    return this.form.get('companyName');
  }
  get companyDesc() {
    return this.form.get('companyDesc');
  }

  log() {
    console.log(this.form);
  }


}
