import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpropertiesComponent } from './viewproperties.component';

describe('ViewpropertiesComponent', () => {
  let component: ViewpropertiesComponent;
  let fixture: ComponentFixture<ViewpropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewpropertiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
