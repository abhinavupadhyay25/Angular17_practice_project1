import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, NgStyle, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practice_1';
  constructor() {
    console.log('AppComponent constructor called');
  }
  // @HostListener('click', ['$event'])
  // show() {
  //   alert('click event occured');
  // }
  Cdata: any;
  getData(val: any) {
    this.Cdata = val;
  }
  isLoggedIn: boolean = false;
  login() {
    this.isLoggedIn = true;
  }
  logout() {
    this.isLoggedIn = false;
  }
  isValid = true;
  onChange(val: any) {
    this.isValid = val;
  }
  num1 = 300;
  num2 = 300;
  user1: string = 'mohan';
  employees = [
    { id: 101, name: 'emp1' },
    { id: 102, name: 'emp2' },
    { id: 103, name: 'emp3' },
    { id: 104, name: 'emp4' },
  ];
  //employees: any;
  employees1 = [
    { id: 101, name: 'emp1', city: 'delhi' },
    { id: 102, name: 'emp2', city: 'patna' },
    { id: 103, name: 'emp3', city: 'delhi' },
    { id: 104, name: 'emp4', city: 'pune' },
  ];
  getColor(city: any) {
    debugger;
    switch (city) {
      case 'delhi':
        return 'orange';

      case 'patna':
        return 'green';

      case 'pune':
        return 'yellow';
    }
    return null;
  }
}
