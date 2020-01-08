import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TemplateDrivenForm } from './template-driven-form/template-driven-form.component';
import { ReactiveForm } from './reactive-form/reactive-form.component';
import { Header } from './header/header.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'reactive-form', pathMatch: 'full'},
  {path: 'reactive-form', component: ReactiveForm},
  {path: 'template-driven-form', component: TemplateDrivenForm}
]

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
    ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    TemplateDrivenForm,
    ReactiveForm,
    Header
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
