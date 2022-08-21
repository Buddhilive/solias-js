import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'solias-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  @Input() name!: string;

  @Input() cols: number = 30;

  @Input() rows: number = 10;

  @Input() placeholder!: string;

  @Input() isDisabled: boolean = false;

  @Input() isReadOnly: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
