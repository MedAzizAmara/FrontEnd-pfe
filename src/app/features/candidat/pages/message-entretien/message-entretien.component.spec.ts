import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEntretienComponent } from './message-entretien.component';

describe('MessageEntretienComponent', () => {
  let component: MessageEntretienComponent;
  let fixture: ComponentFixture<MessageEntretienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MessageEntretienComponent]
    });
    fixture = TestBed.createComponent(MessageEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
