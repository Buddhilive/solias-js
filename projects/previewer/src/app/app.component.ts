import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('dialogElement') dialogElement!: ElementRef;

  title = 'previewer';

  clickMe(e: any) {
    console.log('Click Triggered', e, this.dialogElement);
    this.dialogElement.nativeElement.showModal();
  }
}
