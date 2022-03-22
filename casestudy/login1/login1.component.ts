import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  loginForm: FormGroup | any;
  title = 'material-login';
  constructor(
    private router:Router
  ) {
    this.loginForm = new FormGroup({
       email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
         '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
       ),]),
     name:new FormControl('',[Validators.required,Validators.pattern(
           '[a-zA-Z][a-zA-Z ]+',
     ),]),
     

      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )])
    });
   }
  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.loginForm.valid){
      return;
    }
   // localStorage.setItem('user',this.loginForm.value)
   console.log("successfully logged");
    this.router.navigate(['/roombooking'])
  }
}


