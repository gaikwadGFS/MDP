import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadpropertiesComponent } from './uploadproperties.component';

describe('UploadpropertiesComponent', () => {
  let component: UploadpropertiesComponent;
  let fixture: ComponentFixture<UploadpropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadpropertiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadpropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
