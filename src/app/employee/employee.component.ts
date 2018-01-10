import { Component } from "@angular/core"

@Component({selector: 'my-employee', templateUrl: 'app/employee/employee.component.html'})

export class EmployeeComponent {
    firstname: string = 'hema';
    lastname: string = 'lat';
    gender: string = 'female';
    age: number = 99;
	showDetails: boolean = false;

		toggleDetails(): void{
	this.showDetails=!this.showDetails;
	}
onClick(): void {
console.log('button clicked');

}

}