import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styles: [
  ]
})
export class SummaryComponent implements OnInit {

  @Output() step = new EventEmitter<number>();

  @Input() items: any;
  @Input() addOns: any;
  @Input() extras: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
  }

  onPrevStep(prevStep: number): void {
    this.step.emit(prevStep);
  }

  onNextStep(nextStep: number): void {
    this.step.emit(nextStep);
  }

}
