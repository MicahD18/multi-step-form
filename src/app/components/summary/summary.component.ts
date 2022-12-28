import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styles: [],
})
export class SummaryComponent implements OnInit {
  @Output() step = new EventEmitter<number>();

  @Input() items: any;
  @Input() addOns: any;
  @Input() extras: any;

  totalAmount: number = 0;

  allItems: any = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.allItems.length);

    //? NOTE: Does not work...
    //TODO: If this.allItems.length > 0, call the calcTotal function()
    this.calcTotal();
  }

  onPrevStep(prevStep: number): void {
    this.step.emit(prevStep);
  }

  onNextStep(nextStep: number): void {
    this.step.emit(nextStep);
  }

  calcTotal() {
    this.allItems = this.items.concat(this.extras);

    let prices: any[] = [];

    this.allItems.map((item: any) => {
      prices.push(item.price);

      const initialValue = 0;

      const total = prices.reduce(
        (prev: number, current: number) => prev + current,
        initialValue
      );

      this.totalAmount = total;
    });

    console.log(this.allItems);
  }

  removeLocalStorageData() {
    localStorage.removeItem('STEP_1');
  }
}
