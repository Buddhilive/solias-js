import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'solias-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() type: 'email' | 'number' | 'password' | 'tel' | 'text' = 'text';

  @Input() placeholder: string = '';

  @Input() value!: string;

  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
