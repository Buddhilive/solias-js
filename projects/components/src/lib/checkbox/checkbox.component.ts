import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'solias-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() label!: string;

  @Input() id!: string;

  @Input() isDisabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
