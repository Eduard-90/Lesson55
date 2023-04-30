import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent {
  members = 0;
  group = 'Healthy lifestyle';
  @Output() close = new EventEmitter();
}
