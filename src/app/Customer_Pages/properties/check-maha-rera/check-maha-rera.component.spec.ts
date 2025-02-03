import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMahaReraComponent } from './check-maha-rera.component';

describe('CheckMahaReraComponent', () => {
  let component: CheckMahaReraComponent;
  let fixture: ComponentFixture<CheckMahaReraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckMahaReraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckMahaReraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
