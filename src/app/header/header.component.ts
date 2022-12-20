import { Component, OnInit } from '@angular/core';
import { Step } from '../models/step.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  steps: Step[] = [
    { id: 1, title: 'YOUR INFO', isActive: false, isCompleted: false },
    { id: 2, title: 'SELECT A PLAN', isActive: false, isCompleted: false },
    { id: 3, title: 'ADD-ONS', isActive: false, isCompleted: false },
    { id: 4, title: 'SUMMARY', isActive: false, isCompleted: false },
  ];

  currentStep: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.mapSteps(this.currentStep);
  }

  onInfoStep(step: number) {
    this.currentStep = step;
    this.mapSteps(this.currentStep);
  }

  // onNextStep(): void {
  //   this.currentStep += 1;

  //   this.mapSteps(this.currentStep);
  // }

  // onPreviousStep(): void {
  //   this.currentStep -= 1;
  //   this.mapSteps(this.currentStep);
  // }

  goToStep(step: number): void {
    this.currentStep = step;
    this.mapSteps(step);
  }

  mapSteps(step: number) {
    this.steps.map((_step) => {
      if (_step.id === step) {
        _step.isActive = true;
      } else {
        _step.isActive = false;
      }
    })
  }
}
