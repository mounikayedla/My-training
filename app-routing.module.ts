import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentComponent } from './dashboard/department/department.component';
import { StaffComponent } from './dashboard/staff/staff.component';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component'
import { Login1Component } from './login1/login1.component';
import { ManagerComponent } from './manager/manager.component';
import { OwnerComponent } from './owner/owner.component';
import { PaymentAComponent } from './payment-a/payment-a.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { RegisterComponent } from './register/resgister.component';
import { ReservationuserComponent } from './reservationuser/reservationuser.component';
import { RoombookingComponent } from './roombooking/roombooking.component';
import { ReservationComponent } from './services/reservation/reservation.component';
import { RoomComponent } from './services/room/room.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {path:'aboutus',component:AboutusComponent},
  {path:'',component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'room',component:RoomComponent},
  {path:'login',component:LoginComponent},
  {path:'booking',component:BookRoomComponent},
  {path:'reservation',component:ReservationComponent},
 { path:'inventory',component:InventoryComponent},
  {path:'staff',component:StaffComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'guest',component:GuestComponent},
  {path:'login1',component:Login1Component},
  {path:'roombooking',component:RoombookingComponent},
  {path:'user',component:ReservationuserComponent},
{path:'payment',component:PaymentComponent},{path:'dept',component:DepartmentComponent},
{path:'pay',component:PaymentAComponent},
{path:'register',component:RegisterComponent},
{path:'success',component:PaymentsuccessComponent},
{path:'owner',component:OwnerComponent},
{path:'manager',component:ManagerComponent},
{path:'receptnt',component:ReceptionistComponent},
{path:'lgn',component:SigninComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
