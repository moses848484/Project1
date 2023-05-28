import { Component, ViewEncapsulation,  Inject } from '@angular/core';


@Component({
  selector: 'app-home',
  template: '<ejs-schedule></ejs-schedule',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'myangularproject';
  public dateValue: Date = new Date();
  public minDate: Date = new Date(1000, 6, 10);
  public maxDate: Date = new Date(3090, 12, 20);
}
