import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  No;
  emp;
  message;
  routes;
  constructor(public rout :ActivatedRoute,public service:DataService,public router: Router) 
  {
       let UpdateStatus = this.rout.paramMap;
      UpdateStatus.subscribe((params)=>{
      this.No = params.get("no");
      //alert(this.No);
      })
    
      this.service.getDataByID(this.No).subscribe((respo)=>{
      this.emp=respo[0];
      console.log(this.emp);
    })
  
}
update(){
   
  this.service.update(this.emp).subscribe((res)=>{
  console.log(res);
  this.router.navigate(['home']);
  })
}
  ngOnInit() 
  {
  }

  }

