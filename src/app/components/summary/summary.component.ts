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

  isComplete: boolean = false;

  @Input() stepsArray: any;

  constructor() {}

  ngOnInit(): void {
    this.calcTotal();
    this.completeStep();
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
  }

  completeStep() {
    this.isComplete = true;
    this.stepsArray[3].isCompleted = true;
  }

  removeLocalStorageData() {
    localStorage.removeItem('STEP_1');
  }
}
