import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public service:DataService,public router:Router) { }

  ngOnInit() {
  }
  addRecord(formdata:any)
  {
    let emp=(formdata.form.value);
    console.log(emp);
    let StatusofResult=this.service.addRecord(emp);
    StatusofResult.subscribe((result)=>{
    console.log(result);
    this.router.navigate(['home']);
    });
    //alert("addRecord");
  }

}
