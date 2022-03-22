import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAComponent } from './payment-a.component';

describe('PaymentAComponent', () => {
  let component: PaymentAComponent;
  let fixture: ComponentFixture<PaymentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
