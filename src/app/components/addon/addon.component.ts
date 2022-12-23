import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AddOn } from 'src/app/models/add-on.model';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styles: [],
})
export class AddonComponent implements OnInit {
  @Output() step = new EventEmitter<number>();

  @Output() name = new EventEmitter<string>();
  @Output() price = new EventEmitter<string>();

  addOns: AddOn[] = [
    {
      id: 1,
      name: 'Online service',
      description: 'Access to multiplayer games',
      price: '+$1/mo',
    },
    {
      id: 2,
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: '+$2/mo',
    },
    {
      id: 3,
      name: 'Customizable Profile',
      description: 'Custom theme on your profile',
      price: '+$2/mo',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onPrevStep(prevStep: number): void {
    this.step.emit(prevStep);
  }

  onNextStep(nextStep: number): void {
    this.step.emit(nextStep);
  }
}
