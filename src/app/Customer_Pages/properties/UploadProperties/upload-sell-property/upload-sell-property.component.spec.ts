import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSellPropertyComponent } from './upload-sell-property.component';

describe('UploadSellPropertyComponent', () => {
  let component: UploadSellPropertyComponent;
  let fixture: ComponentFixture<UploadSellPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadSellPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadSellPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
