import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../model/department';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private baseURL = "http://localhost:8081";

  constructor(private httpClient: HttpClient) { }

  getDeptList(): Observable<any> {
    return this.httpClient.get(this.baseURL + '/findAll');
  }

  addDeptList(department: Department) {
    console.log(department );
    return this.httpClient.post<any>(this.baseURL + '/add', department);
  }

  updateDeptList(data:any){
    return this.httpClient.put<any>(this.baseURL+'/update',data);
  }
  deleteDeptList(departmentID:number){
    return this.httpClient.delete<any>(this.baseURL+'/delete/'+departmentID);
  }
}