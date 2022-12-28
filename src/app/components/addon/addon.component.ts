import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() extras = new EventEmitter<any[]>();

  addOnArray: any[] = [];

  // from header component
  @Input() monthly!: boolean;

  addOns: AddOn[] = [
    {
      id: 1,
      name: 'Online service',
      description: 'Access to multiplayer games',
      price: 1,
      yearlyPrice: 10,
    },
    {
      id: 2,
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: 2,
      yearlyPrice: 20,
    },
    {
      id: 3,
      name: 'Customizable Profile',
      description: 'Custom theme on your profile',
      price: 2,
      yearlyPrice: 20,
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

  pushToExtras(index: number, checked: boolean) {
    if (checked) {
      this.addOns.map((_item, i) => {
        if (index === i) {
          this.addOnArray.push({
            name: _item.name,
            price: this.monthly === true ? _item.price : _item.yearlyPrice,
          });
          this.extras.emit(this.addOnArray);
          console.log(this.addOnArray);
        }
      });
    } else {
      this.addOns.map((_item, i) => {
        if (index === i) {
          // delete this.addOnArray[index];

          this.addOnArray.filter((val) => {
            if (val.name !== _item.name) {
              this.addOnArray.splice(index, 1);
            } else {
              this.addOnArray = [];
            }
          })

          this.extras.emit(this.addOnArray);
          console.log(this.addOnArray);
        }
      });
    }
  }
}
