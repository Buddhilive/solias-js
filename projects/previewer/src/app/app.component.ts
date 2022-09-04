import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'previewer';

  clickMe(e: any) {
    console.log('Click Triggered', e);
  }
}
