import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachRegistrarOfficeComponent } from './serach-registrar-office.component';

describe('SerachRegistrarOfficeComponent', () => {
  let component: SerachRegistrarOfficeComponent;
  let fixture: ComponentFixture<SerachRegistrarOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerachRegistrarOfficeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerachRegistrarOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
