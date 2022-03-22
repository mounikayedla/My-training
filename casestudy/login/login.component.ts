import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  
  authenticationRequest:any={
    "username":"",
    "password":"",
    
   
  };

  surveyForm!: FormGroup;
  submitted= false;

  response:any;

//*this is for declaring toggle password 
  public showPassword: boolean = false;

 
 constructor(private service:JwtClientService,private  formBuilder: FormBuilder,private router:Router) { }


 
  onSubmit():void
 {
 
   if((this.authenticationRequest.username!=''&& this.authenticationRequest.password!='')&&(this.authenticationRequest.username!=null && this.authenticationRequest.password!=null))
   {
     console.log("we have to submit the form");

     this.service.authenticateClient(this.authenticationRequest)
     .subscribe((data:any)=>
      {
        
        console.log(data);
       
      
     
       this.service.loginUser(data)
       if(this.service.isLoggedIn()==true)
       {
       
      this.router.navigate(['/owner'])
       }
       else
       {
         alert("please enter valid details");
       }
      },
      (error:any)=>
       {
         console.log(error);
       }
       
       );
   }
   else
   {
     alert("Fileds are empty!!");
   }

  
  }
  ngOnInit(): void {
      
  }


//*togglepassword method declaration
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  

 }
