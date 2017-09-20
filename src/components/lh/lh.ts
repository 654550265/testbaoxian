import { Component } from '@angular/core';

@Component({
  selector: 'lh',
  templateUrl: 'lh.html'
})
export class LhComponent {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
