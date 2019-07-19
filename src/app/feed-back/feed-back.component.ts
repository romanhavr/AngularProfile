import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { formEmailValidation, formSalaryValidation, formAgeValidation } from '../validators.directive';

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
    salary: new FormControl(),
    salaryKGS: new FormControl('', formSalaryValidation()),
    feedback: new FormControl()
  });
  currencies = ['USD', 'UAH', 'KGS'];
  currencyIndex: number;
  currentCurrency = 'KGS';
  salary: number;

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.formData.controls.salaryKGS.markAsDirty();
    this.formData.controls.salaryKGS.markAsTouched();
    switch (this.currentCurrency) {
      case 'KGS': this.salary = this.formData.controls.salary.value;
        break;
      case 'USD': this.salary = this.formData.controls.salary.value * 60;
        break;
      case 'UAH': this.salary = this.formData.controls.salary.value / 0.4;
    }
    this.formData.controls.salaryKGS.setValue(this.salary);
  }

  onSubmit(data): void {

    this.feedbacks.push({
      name: data.controls.name.value,
      email: data.controls.email.value,
      birthday: data.controls.birthday.value,
      salary: data.controls.salaryKGS.value,
      feedback: data.controls.feedback.value,
    });

    this.feedback = null;

    this.formData.reset();
  }

  isFieldValid(field: string) {
    return !this.formData.get(field).valid && this.formData.get(field).touched;
  }
}
