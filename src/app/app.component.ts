import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
        <wwidget></wwidget>
    </div>
  `
  /*
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  */
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
