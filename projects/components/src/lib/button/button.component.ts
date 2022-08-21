import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'solias-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() label: string = 'Button';

  @Input() type: 'primary' | 'secondary' | 'danger' = 'primary';

  @Output() onClick: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(event: Event | undefined) {
    this.onClick.emit(event);
  }
}
