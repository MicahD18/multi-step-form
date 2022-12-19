import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: [
  ]
})
export class InfoComponent implements OnInit {

  infoForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
