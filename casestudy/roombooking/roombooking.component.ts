import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-roombooking',
  templateUrl: './roombooking.component.html',
  styleUrls: ['./roombooking.component.css']
})
export class RoombookingComponent implements OnInit {

  formValue!: FormGroup
 

  
  rooms: any
  constructor(private roomService: RoomService, private formBuilder: FormBuilder,  private router:Router) { }

  ngOnInit() {
    this.getRooms();
    this.formValue = this.formBuilder.group({
      bookingid:[''],
      roomid:[''],
      checkin:[''],
      checkout:[''],
      noofguset:[''],
      totalpayment:['']
        })
  }

  private getRooms() {
    this.roomService.getRoomList().subscribe(data => {

      console.log(Object.values(data.allRoom));
      this.rooms = data.allRoom;
      // console.log(this.rooms.allRoom+"rooms");
    });
  }

select(){
  alert("Successfully Selected Room");
  this.router.navigate(['/user'])
}
 cancel(){
alert("Cancelled");
this.router.navigate([''])
 }
}