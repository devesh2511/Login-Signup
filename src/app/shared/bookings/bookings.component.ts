import { Component, OnInit } from '@angular/core';
import { Bookings } from './Bookings';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  Bookings !:Bookings[];

  constructor(private bookings: HomeService) { }

  ngOnInit(): void {

    const thisuser = localStorage.getItem("username");

    this.bookings.getBookingbyUsername(thisuser).subscribe((data: any) => {
      this.Bookings = data as Bookings[];
      console.log(this.Bookings)
    })
    
  }

}
