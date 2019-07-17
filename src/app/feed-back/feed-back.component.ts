import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { formEmailValidation, formSlaryValidation, formAgeValidation } from '../validators.directive';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent implements OnInit {
  feedbacks = [];
  feedback: string;
  formData = new FormGroup({
    name: new FormControl(),
    email: new FormControl('', formEmailValidation()),
    birthday: new FormControl('', formAgeValidation()),
    salary: new FormControl('', formSlaryValidation()),
    feedback: new FormControl()
  });
  currencies = ['USD', 'UAH', 'KGS'];
  currencyIndex: number;
  currentCurrency = 'KGS';
  salary: number;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(data): void {
    switch (this.currentCurrency) {
      case 'KGS': this.salary = data.controls.salary.value;
        break;
      case 'USD': this.salary = data.controls.salary.value / 60;
        break;
      case 'UAH': this.salary = data.controls.salary.value * 0.4;
    }
    this.feedbacks.push({
      name: data.controls.name.value,
      email: data.controls.email.value,
      birthday: data.controls.birthday.value,
      salary: this.salary,
      feedback: data.controls.feedback.value,
    });
    this.feedback = null;

    this.formData.reset();
  }

  isFieldValid(field: string) {
    return !this.formData.get(field).valid && this.formData.get(field).touched;
  }
}
