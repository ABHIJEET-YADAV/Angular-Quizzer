import { Component,Input } from '@angular/core';

@Component({
  selector: 'quiz-card',
  templateUrl: 'quiz-card.html'
})
export class QuizCardComponent {
  @Input() clickEvent: Function;

  constructor() {

  }

}
