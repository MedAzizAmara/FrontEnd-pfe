import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRecruteursComponent } from './liste-recruteurs.component';

describe('ListeRecruteursComponent', () => {
  let component: ListeRecruteursComponent;
  let fixture: ComponentFixture<ListeRecruteursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListeRecruteursComponent]
    });
    fixture = TestBed.createComponent(ListeRecruteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
