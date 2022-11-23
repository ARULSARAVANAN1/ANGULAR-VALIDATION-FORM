import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  date!:Date;
  country!:string;
  getdate!:string;
  title = 'validation';
  submit = false;
  items = [""];

  constructor() { 
    setInterval(() =>{
    this.date = new Date()},100)
  }

  setstate(){
    if(this.country == "india"){
      this.items = ["Assam","Bihar","Chhattisgarh","Goa","Haryana","Jammu and Kashmir","Karnataka","Kerala","Tamil Nadu","Telangana"];
    }
    else{
        this.items = ["Alaska","Arizona","California","Delaware","Florida","Georgia","Hawaii",
                      "Idaho","Kentucky","Louisiana","Montana","Nevada","New York","Ohio","Pennsylvania","Rhode Island","South Dakota"];
      }

    }
    alertfun()
    {
      alert("Sucessfully Submitted");
    }
    
   
  }


