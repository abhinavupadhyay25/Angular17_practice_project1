import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private info = 'this is my first service in angular';
  constructor() {}
  getMessage() {
    return this.info;
  }
}
