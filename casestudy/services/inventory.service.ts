import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../model/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private baseURL ="http://localhost:8085";
  postInventory: any;
  
  constructor(private httpClient: HttpClient) { }

  getInventoryList(): Observable<Inventory[]>{
    return this.httpClient.get<Inventory[]>(this.baseURL+'/getAllInv')
  
  }

  addInventoryList(inv: Inventory) {
    console.log(inv );
    return this.httpClient.post<any>(this.baseURL + '/addInv', inv);
  }
  updateInventoryList(inv: Inventory){
    return this.httpClient.put(this.baseURL+'/updateInv',inv);
  }
  deleteInventoryList(inventoryId:number) {
    return this.httpClient.delete<any>(this.baseURL + '/deleteByInv/'+inventoryId);
   }
}
