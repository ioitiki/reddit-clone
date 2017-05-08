/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainFeedComponent } from './main-feed.component';

describe('MainFeedComponent', () => {
  let component: MainFeedComponent;
  let fixture: ComponentFixture<MainFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
