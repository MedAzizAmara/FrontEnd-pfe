import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterCardComponent } from './recruiter-card.component';

describe('RecruiterCardComponent', () => {
  let component: RecruiterCardComponent;
  let fixture: ComponentFixture<RecruiterCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RecruiterCardComponent]
    });
    fixture = TestBed.createComponent(RecruiterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
