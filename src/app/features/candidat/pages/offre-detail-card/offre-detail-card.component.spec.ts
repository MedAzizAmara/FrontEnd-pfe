import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreDetailCardComponent } from './offre-detail-card.component';

describe('OffreDetailCardComponent', () => {
  let component: OffreDetailCardComponent;
  let fixture: ComponentFixture<OffreDetailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OffreDetailCardComponent]
    });
    fixture = TestBed.createComponent(OffreDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
