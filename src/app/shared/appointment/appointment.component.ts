import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, ParamMap } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { map } from 'rxjs';
import { BookServiceComponent } from '../book-service/book-service.component';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  id: string = "";
  data: any;
  constructor(private router: ActivatedRoute, private service: HomeService) { }

  ngOnInit(): void {
    console.log("this is app comp");
    

    this.router.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
    ).subscribe((newValue) => this.id = newValue)

    this.service.getItemByID(this.id).subscribe((data) => {
      console.log(data);
      this.data = data;
    })
  }
}
