import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';

import { BookRoomComponent } from './book-room/book-room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentComponent } from './dashboard/department/department.component';

import { StaffComponent } from './dashboard/staff/staff.component';
import { ServicesComponent } from './services/services.component';
import { ReservationComponent } from './services/reservation/reservation.component';
import { RoomComponent } from './services/room/room.component';
import { DepartmentService } from './services/department.service';
import { InventoryService } from './services/inventory.service';
import { ReservationService } from './services/reservation.service';
import { StaffService } from './services/staff.service';
import { GuestComponent } from './guest/guest.component';
import { Login1Component } from './login1/login1.component';
import { RoombookingComponent } from './roombooking/roombooking.component';
import { ReservationuserComponent } from './reservationuser/reservationuser.component';
import { PaymentComponent } from './payment/payment.component'
import { RegisterComponent } from './register/resgister.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { OwnerComponent } from './owner/owner.component';
import { ManagerComponent } from './manager/manager.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    HomepageComponent,
    ContactusComponent,
    LoginComponent,
    DashboardComponent,
    DepartmentComponent,
    
    StaffComponent,
    ServicesComponent,
    ReservationComponent,
    RoomComponent,
    BookRoomComponent,
    GuestComponent,
    Login1Component,
    RoombookingComponent,
    ReservationuserComponent,
    PaymentComponent,
    RegisterComponent,
    InventoryComponent,
    PaymentsuccessComponent,
    OwnerComponent,
    ManagerComponent,
    ReceptionistComponent,
    SigninComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DepartmentService,InventoryService,ReservationService,StaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
