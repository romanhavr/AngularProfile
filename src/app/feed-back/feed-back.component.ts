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

  constructor() {}

  ngOnInit() {
  }

  onSubmit(data): void {
    this.feedbacks.push({
      name: data.controls.name.value,
      email: data.controls.email.value,
      birthday: data.controls.birthday.value,
      feedback: data.controls.feedback.value,
    });
    this.feedback = null;

    this.formData.reset();
  }

  isFieldValid(field: string) {
    return !this.formData.get(field).valid && this.formData.get(field).touched;
  }
}
