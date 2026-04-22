import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRecommendedOffersSectionComponent } from './dashboard-recommended-offers-section.component';

describe('DashboardRecommendedOffersSectionComponent', () => {
  let component: DashboardRecommendedOffersSectionComponent;
  let fixture: ComponentFixture<DashboardRecommendedOffersSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DashboardRecommendedOffersSectionComponent]
    });
    fixture = TestBed.createComponent(DashboardRecommendedOffersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
