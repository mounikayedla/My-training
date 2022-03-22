import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guest } from '../guest';
import { GuestService } from '../guest.service';



@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {
  loginForm: FormGroup | any;
  title = 'material-login';
  bookService: any;
  guest: any;
  formValue: any;
  
gus:Guest=new Guest;
  constructor(private guestService: GuestService, private formBuilder: FormBuilder, private api: GuestService,
    private router:Router
  ) {
 
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      guestId: [''],
      guestName: [''],
      guestEmail: [''],
      guestGender: [''],
      guestAddress: [''],
      guestContact: ['']
    })
    
    this.getguests();
  }
  getguests() {
    this.guestService.getGuestList().subscribe(data => {
      console.log(Object.values(data.allGuest));
      this.guest = data.allGuest;

    });
  }

  
  updateGuests() {
    this.gus.guestId = this.formValue.value.guestId;
    this.gus.guestName = this.formValue.value.guestName;
    this.gus.guestEmail = this.formValue.value.guestEmail;
    this.gus.guestGender = this.formValue.value.guestGender;
    this.gus.guestAddress = this.formValue.value.guestAddress;
    this.gus.guestContact = this.formValue.value.guestContact;
  
    this.guestService.updateGuestList(this.gus).subscribe((data:any[]) => {
      console.log(data);
      alert("Updated Guest")
      this.getguests();
      
    })
  }
  deleteGuests(data:any) {
    this.guestService.deleteGuestList(data.guestId).subscribe(data => {
     alert("Deleted Guest")
       //this.reservation = data.resList;
      this.getguests();
    })
 }

 addGuests() {

  this.gus.guestId = this.formValue.value.guestId;
  this.gus.guestName = this.formValue.value.guestName;
  this.gus.guestEmail = this.formValue.value.guestEmail;
  this.gus.guestGender = this.formValue.value.guestGender;
  this.gus.guestAddress = this.formValue.value.guestAddress;
  this.gus.guestContact = this.formValue.value.guestContact;

  this.guestService.addGuestList(this.gus).subscribe(data=> {
    //this.reservation = data.resList;
    console.log(data);
    alert("New Guest Added!!");
    this.formValue.reset();
    this.getguests();
  })
}
  onEditgue(guest:Guest) {
    this.formValue.controls['guestId'].setValue(guest.guestId);
    this.formValue.controls['guestName'].setValue(guest.guestName);
    this.formValue.controls['guestEmail'].setValue(guest.guestEmail);
    this.formValue.controls['guestGender'].setValue(guest.guestGender);
    this.formValue.controls['guestAddress'].setValue(guest.guestAddress);
    this.formValue.controls['guestContact'].setValue(guest.guestContact);
  }
}
  

  

