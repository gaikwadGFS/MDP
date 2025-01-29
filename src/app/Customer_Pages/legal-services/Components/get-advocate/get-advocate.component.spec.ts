import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAdvocateComponent } from './get-advocate.component';

describe('GetAdvocateComponent', () => {
  let component: GetAdvocateComponent;
  let fixture: ComponentFixture<GetAdvocateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAdvocateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAdvocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
