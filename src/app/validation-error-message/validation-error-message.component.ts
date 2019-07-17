import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-validation-error-message',
  templateUrl: './validation-error-message.component.html',
  styleUrls: ['./validation-error-message.component.css']
})
export class ValidationErrorMessageComponent implements OnInit {
  @Input() errorMsg: string;
  @Input() displayError: boolean;

  constructor() { }

  ngOnInit() {
  }

}
