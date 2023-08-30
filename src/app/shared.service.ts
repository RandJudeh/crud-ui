import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:7174/api";
readonly PhotoUrl = "https://localhost:7174/Upload/";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/departments');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Departments',val);
  }

  updateDepartment(val:any){
    console.log(val);
    return this.http.put(this.APIUrl+'/Departments/'+val.DepartmentId,val);
  }

  deleteDepartment(val:any){
    console.log(val)
    return this.http.delete(this.APIUrl+'/Departments/'+val.departmentId);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employees');
  }

  addEmployee(val:any){
    console.log(val)
    return this.http.post(this.APIUrl+'/Employees',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employees/'+val.employeeId,val);
  }

  deleteEmployee(val:any){
    console.log(val)
    return this.http.delete(this.APIUrl+'/Employees/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employees/Upload/',val);
 }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employees/GetAllDepartmentNames');
  }

}