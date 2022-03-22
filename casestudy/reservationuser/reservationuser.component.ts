import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservationuser',
  templateUrl: './reservationuser.component.html',
  styleUrls: ['./reservationuser.component.css']
})
export class ReservationuserComponent implements OnInit {
loginForm: FormGroup | any;
 
  constructor( private router:Router) { 
  //selectedValue: string; 
  this.loginForm = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    CheckIn:new FormControl('',[Validators.required]),
    CheckOut:new FormControl('',[Validators.required]),
    noOfGuests:new FormControl('',[Validators.required])

  }
    
  
  
  );}
  ngOnInit(): void {
    
  }
  confirm(){

   
    alert("Successfully submitted,Go for payment");
    this.router.navigate(['/pay'])

  
  }

}

  