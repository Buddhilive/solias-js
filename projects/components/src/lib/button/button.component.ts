import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'solias-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() label: string = 'Button';

  @Input() type: string = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
