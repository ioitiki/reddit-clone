import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic.model';
import { Router } from '@angular/router';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.css'],
  providers: [TopicService]
})
export class MainFeedComponent implements OnInit {
  topics: Topic[];

  constructor(private router: Router, private topicService: TopicService) { }

  ngOnInit(){
    this.topics = this.topicService.getTopics();
  }

  detailPage(clickedTopic: Topic) {
    this.router.navigate(['topics', clickedTopic.id]);
  }

}
