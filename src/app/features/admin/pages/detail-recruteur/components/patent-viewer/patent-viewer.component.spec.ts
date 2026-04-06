import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentViewerComponent } from './patent-viewer.component';

describe('PatentViewerComponent', () => {
  let component: PatentViewerComponent;
  let fixture: ComponentFixture<PatentViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PatentViewerComponent]
    });
    fixture = TestBed.createComponent(PatentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
