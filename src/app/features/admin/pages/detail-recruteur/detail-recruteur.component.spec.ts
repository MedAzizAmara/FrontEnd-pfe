import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRecruteurComponent } from './detail-recruteur.component';

describe('DetailRecruteurComponent', () => {
  let component: DetailRecruteurComponent;
  let fixture: ComponentFixture<DetailRecruteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetailRecruteurComponent]
    });
    fixture = TestBed.createComponent(DetailRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
