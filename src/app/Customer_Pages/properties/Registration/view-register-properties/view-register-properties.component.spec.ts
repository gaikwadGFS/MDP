import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegisterPropertiesComponent } from './view-register-properties.component';

describe('ViewRegisterPropertiesComponent', () => {
  let component: ViewRegisterPropertiesComponent;
  let fixture: ComponentFixture<ViewRegisterPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRegisterPropertiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRegisterPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
