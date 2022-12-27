import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: [],
})
export class InfoComponent implements OnInit {
  infoForm!: FormGroup;

  @Output() step = new EventEmitter<number>();

  @Input() isConfirmed!: boolean;

  @Input() localDraft!: string | null;

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

    // checks for value change in local storage
    this.localDraft = localStorage.getItem('STEP_1');

    // if value change, overwrite all values of form
    if (this.localDraft) {
      this.infoForm.setValue(JSON.parse(this.localDraft));
    }

    console.log(this.isConfirmed);
    

    this.infoForm.valueChanges
      .pipe(filter(() => this.infoForm.valid))
      .subscribe((val) => {
        localStorage.setItem('STEP_1', JSON.stringify(val));

        // if confirm clicked, set draft back to null
        if (this.isConfirmed === true) {
          console.log('removing...');
          
          localStorage.removeItem('STEP_1');
        }
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
