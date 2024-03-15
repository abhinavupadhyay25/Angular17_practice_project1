import { Component, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header', // select by element name
  // //selector: '.app-header', // select by class name
  // selector: '[app-header]', // select by attribute name
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None,
  inputs: ['Pdata'],
  outputs: ['childEvent'],
})
export class HeaderComponent {
  Pdata: any;
  childEvent = new EventEmitter();
  sendData(val: any) {
    this.childEvent.emit(val);
  }
}
