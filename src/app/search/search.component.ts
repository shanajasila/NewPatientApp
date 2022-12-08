import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  patientname=""
  searchData:any=[]

  constructor(private api:ApiService,private route:Router){}
  readValue=()=>{
    let data={"patientname":this.patientname}
    console.log(data)
    this.api.searchpatient(data).subscribe(
        (response:any)=>{
          console.log(response)
          if(response.length ==0){
            alert("Patient not found")
          }
          else{
            this.searchData=response;
          }
        }
    )
  }


  id=""
  deleteClick=(id:any)=>{

    let data:any={"id":id}
    console.log(data)
    this.api.deletepatient(data).subscribe(
      (response:any)=>{
        console.log(response)

        if(response.status="success"){
          alert("Patient deleted Successfully")
          this.searchData=[]
         this.patientname=""
          this.route.navigate(['/search'])
          
        }
        else{
          alert("patient not found")
          this.patientname=""
        }
      }
    )
  }
 
}
