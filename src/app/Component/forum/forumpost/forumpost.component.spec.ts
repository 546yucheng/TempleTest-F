import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumpostComponent } from './forumpost.component';

describe('ForumpostComponent', () => {
  let component: ForumpostComponent;
  let fixture: ComponentFixture<ForumpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumpostComponent]
    });
    fixture = TestBed.createComponent(ForumpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
