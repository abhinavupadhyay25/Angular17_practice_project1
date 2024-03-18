import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome',
  standalone: true,
})
export class WelcomePipe implements PipeTransform {
  transform(value: any, ...args: any[]): unknown {
    return 'Welcome to Angular : ' + value;
  }
}
