import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatMenuModule} from '@angular/material/menu'
import {MatListModule} from '@angular/material/list'
import {MatDividerModule} from '@angular/material/divider'
import {MatGridListModule} from '@angular/material/grid-list'
import {  MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule} from '@angular/material/radio';
import{MatDatepickerModule}from '@angular/material/datepicker';
import{MatSelectModule}from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import{MatCardModule} from '@angular/material/card'
import{  MatTabsModule} from '@angular/material/tabs'
import{ MatCheckboxModule}from '@angular/material/checkbox'

const Material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatInputModule,
  MatFormFieldModule,
ReactiveFormsModule,
MatRadioModule,
MatDatepickerModule, MatSelectModule,
MatNativeDateModule,
MatCardModule,
MatTabsModule,
MatCheckboxModule

];

@NgModule({
  
  imports: [Material ],
  exports: [Material]
  
})
export class MaterialModule { }






// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class MaterialModule { }
