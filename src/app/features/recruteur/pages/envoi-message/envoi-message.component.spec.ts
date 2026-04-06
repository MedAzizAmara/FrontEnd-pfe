import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiMessageComponent } from './envoi-message.component';

describe('EnvoiMessageComponent', () => {
  let component: EnvoiMessageComponent;
  let fixture: ComponentFixture<EnvoiMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EnvoiMessageComponent]
    });
    fixture = TestBed.createComponent(EnvoiMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
