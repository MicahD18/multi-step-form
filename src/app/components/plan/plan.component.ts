import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Plan } from 'src/app/models/plan.model';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styles: [],
})
export class PlanComponent implements OnInit {
  @Output() step = new EventEmitter<number>();

  plans: Plan[] = [
    {
      id: 1,
      iconUrl: '../../../assets/images/icon-arcade.svg',
      name: 'Arcade',
      monthly: '$9/mo',
      yearly: '$90/yr',
      isActive: false,
    },
    {
      id: 2,
      iconUrl: '../../../assets/images/icon-advanced.svg',
      name: 'Advanced',
      monthly: '$12/mo',
      yearly: '$120/yr',
      isActive: false,
    },
    {
      id: 3,
      iconUrl: '../../../assets/images/icon-pro.svg',
      name: 'Pro',
      monthly: '$15/mo',
      yearly: '$150/yr',
      isActive: false,
    },
  ];

  currentPlan: number = 1;

  isMonthly: boolean = false;
  isYearly: boolean = false;
  setActive: boolean = false;

  constructor() {}

  ngOnInit(): void {
    
  }

  onPrevStep(prevStep: number): void {
    this.step.emit(prevStep);
  }

  onNextStep(nextStep: number): void {
    this.step.emit(nextStep);
  }

  goToPlan(plan: number): void {
    this.currentPlan = plan;
    this.mapPlans(plan);
  }

  mapPlans(plan: number) {
    this.plans.map((_plan) => {
      if (_plan.id === plan) {
        _plan.isActive = true;
        this.setActive = true;
      } else {
        _plan.isActive = false;
      }
    });
  }

  setMonthly() {
    this.isMonthly = true;
    this.isYearly = false;
  }

  setYearly() {
    this.isYearly = true;
    this.isMonthly = false;
  }
}
