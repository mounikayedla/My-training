import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Guest } from '../guest';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  formValue: any;
  guest: any;
gus:Guest=new Guest;
  constructor( private guestService: GuestService, private formBuilder: FormBuilder, private api: GuestService) { }

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

  addGue() {
    this.gus.guestId = this.formValue.value.guestId;
    this.gus.guestName = this.formValue.value.guestName;
    this.gus.guestEmail = this.formValue.value.guestEmail;
    this.gus.guestGender = this.formValue.value.guestGender;
    this.gus.guestAddress = this.formValue.value.guestAddress;
    this.gus.guestContact = this.formValue.value.guestContact;
  
    this.api.addGuestList(this.gus).subscribe(data => {
      console.log(data.resList);
      alert('GUESTS Done!!!');
      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset;
      this.getguests();

    },
      err => {
        alert('Guests Done!!!');
      }
    )

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
  


