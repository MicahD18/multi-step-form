import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: [],
})
export class InfoComponent implements OnInit {
  infoForm!: FormGroup;

  @Output() step = new EventEmitter<number>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.infoForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'
          ),
        ],
      ],
    });
  }

  get name() {
    return this.infoForm.get('name');
  }

  get email() {
    return this.infoForm.get('email');
  }

  get phone() {
    return this.infoForm.get('phone');
  }

  onNextStep(nextStep: number): void {
    this.step.emit(nextStep);
  }
}
