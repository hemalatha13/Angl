import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  { name = 'Jemass'; 
appTitle: string = 'Welcome';
appList: any[] = [ {
  "ID": "1",
  "Name" : "One"
},

{
  "ID": "2",
  "Name" : "Two"
} ];

}
