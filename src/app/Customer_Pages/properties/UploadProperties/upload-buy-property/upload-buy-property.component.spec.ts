import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBuyPropertyComponent } from './upload-buy-property.component';

describe('UploadBuyPropertyComponent', () => {
  let component: UploadBuyPropertyComponent;
  let fixture: ComponentFixture<UploadBuyPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadBuyPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadBuyPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
