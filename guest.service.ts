import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from './guest';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private baseURL ="http://localhost:8088/Guest";
  constructor(private httpClient: HttpClient) { }
  getGuestList(): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + '/getAllGuest');
  }

  addGuestList(guest:Guest) {
    console.log(guest);
    return this.httpClient.post<any>(this.baseURL + '/addGuest',guest);
  }

  updateGuestList(guest:Guest) {
    return this.httpClient.put<any>(this.baseURL + '/updateGuest',guest);
  }
 deleteGuestList(guestId:number) {
   return this.httpClient.delete<any>(this.baseURL + '/deleteGuest/'+guestId);
  }
 }

