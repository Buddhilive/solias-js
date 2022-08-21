import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'solias-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  @Input() label!: string;

  @Input() id!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
