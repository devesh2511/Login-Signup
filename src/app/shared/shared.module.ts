import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { BookServiceComponent } from './book-service/book-service.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AdminComponent } from './admin/admin.component';
import { Dialog1Component } from './dialog1/dialog1.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Dialog2Component } from './dialog2/dialog2.component';



@NgModule({
  declarations: [
    NavComponent,
    BookServiceComponent,
    AppointmentComponent,
    AdminComponent,
    FooterComponent,
    Dialog1Component,
    Dialog2Component,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    NavComponent,
    BookServiceComponent,
    AppointmentComponent,
    FooterComponent,
    Dialog1Component,
    Dialog2Component
  ]
})
export class SharedModule { }
