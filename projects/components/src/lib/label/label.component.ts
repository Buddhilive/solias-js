import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'solias-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  @Input() text: string = 'Label';

  constructor() { }

  ngOnInit(): void {
  }

}
