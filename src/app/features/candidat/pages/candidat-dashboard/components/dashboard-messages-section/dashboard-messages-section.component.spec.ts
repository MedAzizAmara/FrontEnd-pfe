import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMessagesSectionComponent } from './dashboard-messages-section.component';

describe('DashboardMessagesSectionComponent', () => {
  let component: DashboardMessagesSectionComponent;
  let fixture: ComponentFixture<DashboardMessagesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DashboardMessagesSectionComponent]
    });
    fixture = TestBed.createComponent(DashboardMessagesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
