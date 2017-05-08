import { Component, OnInit } from '@angular/core';
import { TopicService } from './topic.service';
import { Topic } from './topic.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TopicService]
})


export class AppComponent implements OnInit {
  title = 'app works!';
  topics: Topic[];

  ngOnInit(){
    this.topics = this.topicService.getTopics();
  }

  constructor(private router: Router, private topicService: TopicService) { }

  detailPage(clickedTopic: Topic) {
    this.router.navigate(['topics', clickedTopic.id]);
  }

}
