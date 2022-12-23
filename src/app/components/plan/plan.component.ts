import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Plan } from 'src/app/models/plan.model';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styles: [],
})
export class PlanComponent implements OnInit {
  @Output() step = new EventEmitter<number>();

  // data
  @Output() plan = new EventEmitter<string>();
  @Output() monthlyPrice = new EventEmitter<number>();
  @Output() yearlyPrice = new EventEmitter<number>();
  @Output() monthly = new EventEmitter<string>();
  @Output() yearly = new EventEmitter<string>();

  plans: Plan[] = [
    {
      id: 1,
      iconUrl: '../../../assets/images/icon-arcade.svg',
      name: 'Arcade',
      monthlyPrice: 9,
      yearlyPrice: 90,
      monthlyPlan: '(Monthly)',
      yearlyPlan: '(Yearly)',
      isActive: false,
    },
    {
      id: 2,
      iconUrl: '../../../assets/images/icon-advanced.svg',
      name: 'Advanced',
      monthlyPrice: 12,
      yearlyPrice: 120,
      monthlyPlan: '(Monthly)',
      yearlyPlan: '(Yearly)',
      isActive: false,
    },
    {
      id: 3,
      iconUrl: '../../../assets/images/icon-pro.svg',
      name: 'Pro',
      monthlyPrice: 15,
      yearlyPrice: 150,
      monthlyPlan: '(Monthly)',
      yearlyPlan: '(Yearly)',
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

  emitData(name: string, monthlyPrice: number, yearlyPrice: number, monthlyPlan: string, yearlyPlan: string) {

    if (this.isMonthly === true) {
      this.yearly.emit('');
      this.monthly.emit(monthlyPlan);
      this.monthlyPrice.emit(monthlyPrice);
      this.plan.emit(name);
      return;
    }

    if (this.isYearly === true) {
      this.monthly.emit('');
      this.yearly.emit(yearlyPlan);
      this.yearlyPrice.emit(yearlyPrice);
      this.plan.emit(name);
      return;
    }
    
    
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
