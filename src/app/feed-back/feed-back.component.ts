import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent implements OnInit {
  feedbacks = [];
  feedback: string;

  constructor() { }

  ngOnInit() {
  }

  onClick(feedback: string): void {
    if (!feedback) return;  
    this.feedbacks.push(feedback);
    this.feedback = null;
  }
}
