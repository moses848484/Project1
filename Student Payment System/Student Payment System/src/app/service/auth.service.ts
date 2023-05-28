import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {

  }
  apiurl='http://localhost:3000/user';

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }
  GetUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
  Getall(){
    return this.http.get(this.apiurl);
  }
  updateuser(id: any, inputdata: any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }
  updatecustomer(id: number, data: any) : Observable<any> {
    return this.http.put(`http://localhost:3000/customer/${id}`, data);
  }
  addcustomer(data: any): Observable<any> {
    return this.http.post(`http://localhost:3000/customer/`,data);
  }
  getuserrole(){
    return this.http.get('http://localhost:3000/role');
  }
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  getcustomerlist(): Observable<any> {
    return this.http.get('http://localhost:3000/customer');
  }
  removecustomer(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/customer/${id}`);
  }
  Getaccessbyrole(role:any,menu:any){
    return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  }
}
