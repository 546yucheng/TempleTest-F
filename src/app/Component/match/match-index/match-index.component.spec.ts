import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchIndexComponent } from './match-index.component';

describe('MatchIndexComponent', () => {
  let component: MatchIndexComponent;
  let fixture: ComponentFixture<MatchIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchIndexComponent]
    });
    fixture = TestBed.createComponent(MatchIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
