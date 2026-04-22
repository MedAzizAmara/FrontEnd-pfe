import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruteurHomeComponent } from './recruteur-home.component';

describe('RecruteurHomeComponent', () => {
  let component: RecruteurHomeComponent;
  let fixture: ComponentFixture<RecruteurHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RecruteurHomeComponent]
    });
    fixture = TestBed.createComponent(RecruteurHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
