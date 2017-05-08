import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    TopicDetailComponent,
    MainFeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
