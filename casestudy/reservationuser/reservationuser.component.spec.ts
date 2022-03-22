import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationuserComponent } from './reservationuser.component';

describe('ReservationuserComponent', () => {
  let component: ReservationuserComponent;
  let fixture: ComponentFixture<ReservationuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
