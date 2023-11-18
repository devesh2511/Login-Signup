import { Injectable, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { CleaningServices } from '../shared/home/CleaningServices';

@Injectable({
  providedIn: 'root'
})
export class HomeService{
  token! : string;
  constructor(private httpClient: HttpClient) {}

  get(
    sortColumn: string,
    sortType: string,
    searchKey: string,
    currentPage: number,
    pageSize: number
  ): Observable<HttpResponse<any>> {
    let url = `https://localhost:7063/api/CleaningServices?_page=${currentPage}&_limit=${pageSize}`;
    if (sortColumn && sortType) {
      url = `${url}&_sort=${sortColumn}&_order=${sortType}`;
    }
    if (searchKey) {
      if (url.indexOf('&') > -1) {
        url = `${url}&q=${searchKey}`;
      } else {
        url = `${url}q=${searchKey}`;
      }
    }
    return this.httpClient.get<HttpResponse<any>>(url, { observe: 'response' });
  }

  getItemByID(id : string){
    return this.httpClient.get("https://localhost:7063/api/CleaningServices/"+id);
  }

  addBooking(arg: any) {
    return this.httpClient.post("https://localhost:7063/api/Bookings",arg);
  }

}
