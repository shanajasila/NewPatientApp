import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchpatient=()=>{
    return this.http.get("http://localhost:8080/viewpatient")
  }
  addpatient=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/addpatient",dataTosend)
  }
}
