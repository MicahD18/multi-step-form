import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styles: [
  ]
})
export class AddonComponent implements OnInit {
  @Output() step = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onPrevStep(prevStep: number): void {
    this.step.emit(prevStep);
  }

  onNextStep(nextStep: number): void {
    this.step.emit(nextStep);
  }

}
