import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpropertyComponent } from './registerproperty.component';

describe('RegisterpropertyComponent', () => {
  let component: RegisterpropertyComponent;
  let fixture: ComponentFixture<RegisterpropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterpropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
