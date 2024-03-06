import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Counter: {{ counter}} </h2>

    <button (click)="increaseBy(+1)"> +1 </button>
    <button (click)="resetCounterBy(10)">Reset</button>
    <button (click)="increaseBy(-1)"> -1 </button>

  `
})
export class CounterComponent {
  public counter: number = 10;

  public increaseBy( value: number ): void {
    this.counter += value;
  };

  public resetCounterBy( value: number ): void {
    this.counter = value;
  };
  constructor() { }


}
