import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
})
export class TemplateDrivenForm implements OnInit {
  userNameMinLength = 4;
  lastNameMinLength = 2;
  companyMinLength = 6;
  constructor() { }

  ngOnInit() {
  }

  submit(form) {
    console.log(form);
  }

}
