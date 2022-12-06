import { Component } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  id=""
  patientname=""
  adress=""
  contactno=""
  dateofappoinment=""
  doctorname=""
  readValues=()=>{
    let data={"id":this.id,"patientname":this.patientname,"adress":this.adress,"contactno":this.contactno,"dateofappoinment":this.dateofappoinment,"doctorname":this.doctorname}
    console.log(data)
  }
}
