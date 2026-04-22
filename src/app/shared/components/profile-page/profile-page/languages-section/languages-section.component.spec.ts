import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesSectionComponent } from './languages-section.component';

describe('LanguagesSectionComponent', () => {
  let component: LanguagesSectionComponent;
  let fixture: ComponentFixture<LanguagesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LanguagesSectionComponent]
    });
    fixture = TestBed.createComponent(LanguagesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
