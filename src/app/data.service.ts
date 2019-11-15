import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  edit(emp: any) {
    throw new Error("Method not implemented.");
  }


  constructor(public http:HttpClient) { }
  
 getData(){

    return this.http.get("http://15.206.178.40:8500/emp");
    }
    addRecord(emp)
    {
     return this.http.post("http://15.206.178.40:8500/emp",emp);
    }
    delete(no)
    {
      return this.http.delete("http://15.206.178.40:8500/emp/" + no);
    }
    update(emp)
    {
      return this.http.put("http://15.206.178.40:8500/emp/"+ emp.no,emp);
    }
    getDataByID(no)
    {
      return this.http.get("http://15.206.178.40:8500/emp/"+ no);
  
    }
    
   
  }
