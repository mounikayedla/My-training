import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Reservation } from 'src/app/model/reservation';
import { RoomService } from 'src/app/room.service';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
@Injectable()
export class ReservationComponent implements OnInit {
  res: Reservation = new Reservation;
  formValue!: FormGroup
  reservation: any
  roomId: any
  bookingId!: number;
  constructor(private rooom: RoomService, private reservationService: ReservationService, private formBuilder: FormBuilder, private api: ReservationService) { }

  ngOnInit() {
    this.formValue = this.formBuilder.group({
      bookingId: [''],
      roomId: [''],
      checkin: [''],
      checkout: [''],
      numOfGuests: [''],
      finalPrice: ['']
    })
    this.getReservations();
   
    this.rooom.getRoomList();

  }

  getReservations() {
    this.reservationService.getReservationList().subscribe(data => {
      console.log(Object.values(data.resList));
      this.reservation = data.resList;

    });
  }


 
  addReservations() {

    this.res.bookingId = this.formValue.value.bookingId;
    this.res.roomId = this.formValue.value.roomId;
    this.res.checkin = this.formValue.value.checkin;
    this.res.checkout = this.formValue.value.checkout;
    this.res.numOfGuests = this.formValue.value.numOfGuests;
    this.res.finalPrice = this.formValue.value.finalPrice;

    this.reservationService.addReservationList(this.res).subscribe(data=> {
      //this.reservation = data.resList;
      console.log(data);
      alert("New reservation done!!");
      this.formValue.reset();
      this.getReservations();
    })
  }

  
  updateReservations() {
    this.res.bookingId = this.formValue.value.bookingId;
    this.res.roomId = this.formValue.value.roomId;
    this.res.checkin = this.formValue.value.checkin;
    this.res.checkout = this.formValue.value.checkout;
    this.res.numOfGuests = this.formValue.value.numOfGuests;
    this.res.finalPrice = this.formValue.value.finalPrice;
  
    this.reservationService.updateReservationList(this.res).subscribe((data:any[]) => {
      console.log(data);
      alert("Updated Reservation")
      this.getReservations();
      
    })
  }
  

  
  deleteReservations(data:any) {
       this.reservationService.deleteReservationList(data.bookingId).subscribe(data => {
        alert("Deleted Reservation")
          //this.reservation = data.resList;
         this.getReservations();
       })
    }

  addResto() {
    this.res.bookingId = this.formValue.value.bookingId;
    this.res.roomId = this.formValue.value.roomId;
    this.res.checkin = this.formValue.value.checkin;
    this.res.checkout = this.formValue.value.checkout;
    this.res.numOfGuests = this.formValue.value.numOfGuests;
    this.res.finalPrice = this.formValue.value.finalPrice;

    this.api.addReservationList(this.res).subscribe(data => {
      console.log(data.resList);
      alert('Booking Done!!!');
      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset;
      this.getReservations;

    },
      err => {
        alert('Booking Done!!!');
      }
    )

  }

  onEditRes(reservation:Reservation) {
    this.formValue.controls['bookingId'].setValue(reservation.bookingId);
    this.formValue.controls['roomId'].setValue(reservation.roomId);
    this.formValue.controls['checkin'].setValue(reservation.checkin);
    this.formValue.controls['checkout'].setValue(reservation.checkout);
    this.formValue.controls['numOfGuests'].setValue(reservation.numOfGuests);
    this.formValue.controls['finalPrice'].setValue(reservation.finalPrice);
  }
}