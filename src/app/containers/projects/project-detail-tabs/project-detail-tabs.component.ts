import { Component, OnInit } from '@angular/core';
import commentData, { IComment } from '@delegation/data/comments';
import questionData, { IQuestion } from '@delegation/data/questions';

@Component({
  selector: 'app-project-detail-tabs',
  templateUrl: './project-detail-tabs.component.html'
})
export class ProjectDetailTabsComponent implements OnInit {
  comments: IComment[] = commentData;
  questions: IQuestion[] = questionData;

  constructor() { }

  ngOnInit(): void {
  }

}
