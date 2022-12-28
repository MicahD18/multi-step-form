import { Component, Input, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { Step } from '../models/step.model';


// TODO: Scroll to bottom of page
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

  summary: any = [
    {
      price: '',
      plan: '',
      monthly: '',
      yearly: '',
    },
  ];

  currentStep: number = 1;

  isMonthly!: boolean;

  extrasArray!: any;

  constructor() {}

  ngOnInit(): void {
    this.mapSteps(this.currentStep);
  }

  onPrevStep(step: number) {
    this.currentStep = step;
    this.mapSteps(this.currentStep);
  }

  onNextStep(step: number) {
    this.currentStep = step;
    this.mapSteps(this.currentStep);
  }

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
    });
  }

  getPlan(plan: string) {
    this.summary.map((item: any) => {
      item.plan = plan;
    });
  }

  getMonthlyPrice(price: number) {
    this.summary.map((item: any) => {
      item.price = price;
    });
  }

  getYearlyPrice(price: number) {
    this.summary.map((item: any) => {
      item.price = price;
    });
  }

  getMonthly(monthly: string) {
    this.summary.map((item: any) => {
      item.monthly = monthly;
    });
  }

  getYearly(yearly: string) {
    this.summary.map((item: any) => {
      item.yearly = yearly;
    });
  }

  getCheckMonthly(checkMonthly: boolean) {
    this.isMonthly = checkMonthly;
  }

  addExtras(extras: any) {
    this.extrasArray = extras;
  }
}
