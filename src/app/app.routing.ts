import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { MainFeedComponent } from './main-feed/main-feed.component';

const appRoutes: Routes = [
  {
    path: 'topics/:id',
    component: TopicDetailComponent
  },
  {
    path: '',
    component: MainFeedComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
