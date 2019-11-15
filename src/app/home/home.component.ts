import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message;
  emps;
  constructor(public service:DataService,public router:Router) {
    this.getData();
   }
  ngOnInit() 
  {
  }
  getData()
  {
    this.service.getData().subscribe((response)=>{
    //console.log(response);
    this.emps=response;
    });
  }
  addRecord()
  {
   this.router.navigate(['add']);
  }
  delete(no)
  {
    //alert("delete");
    this.service.delete(no).subscribe((res)=>{
    this.getData();
    console.log(no);
    // let StatusofDelete = this.service.delete(no);
    // //this.service.delete(empno).subscribe((result:any)=>{
    //   StatusofDelete.subscribe((result:any)=>{
    //     if(result.affectedRows>0)
    //     {
    //       this.router.navigate(['/home']);
    //       this.getData();
    //     }
    //     else
    //     {
    //       this.message = "Something went wrong!";
    //     }
    //   });
   
  });
}

}
