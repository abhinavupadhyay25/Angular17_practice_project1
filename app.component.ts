import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WelcomePipe } from './welcome.pipe';
import { MessageService } from './message.service';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    WelcomePipe,
    Comp1Component,
    Comp2Component,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practice_1';
  _message = 'hello world';

  constructor(private messageService: MessageService) {
    //this.servInfo = messageService.getMessage();
  }

  getmessage() {
    this._message = this.messageService.getMessage();
  }

  // onChangeData(val: any) {
  //   this._message = val;
  // }

  pipedata = 'Built-in pipes';
  company = {
    name: 'cjdarcl',
    city: 'gurugram',
    state: 'haryana',
    country: 'india',
  };
  students = [
    { name: 'akash', age: 24 },
    { name: 'aman', age: 19 },
    { name: 'ujjawal', age: 30 },
  ];
  num = 323.737893777847;
  curr = 55.56;

  curDate = new Date();

  customPipeDemo = 'Abhinav Upadhyay';
}
