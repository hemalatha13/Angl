import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { EmployeeComponent } from './employee/employee.component'



@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, EmployeeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
