import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { BookServiceComponent } from './book-service/book-service.component';
import { AppointmentComponent } from './appointment/appointment.component';

@NgModule({
  declarations: [
    NavComponent,
    BookServiceComponent,
    AppointmentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    BookServiceComponent,
    AppointmentComponent
  ]
})
export class SharedModule { }
