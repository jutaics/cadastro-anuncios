import { Component, Input } from '@angular/core';


//https://stackblitz.com/edit/currency-mask-bug?file=app%2Fapp.component.ts

@Component({
  selector: 'hello',
  template: '<h1>Hello {{name}}!</h1>',
  styles: ['h1 { font-family: Lato; }']
})
export class HelloComponent  {
  @Input() name: string;
}
