import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Topic } from '../topic.model';
import { TopicService } from '../topic.service'

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css'],
  providers: [TopicService]
})
export class TopicDetailComponent implements OnInit {
  topicId: number;
  topicToDisplay: Topic;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private topicService: TopicService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.topicId = parseInt(urlParameters['id']);
    });
    this.topicToDisplay = this.topicService.getTopicById(this.topicId);
  }

}
