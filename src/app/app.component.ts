import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '';
  username = '';
  displayed = false;
  log = [];

  onToggleDetails() {
    this.displayed = !this.displayed;
    this.log.push(this.log.length + 1);
  }
}
