import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employerege',
  templateUrl: './employerege.component.html',
  styleUrls: ['./employerege.component.css']
})
export class EmployeregeComponent implements OnInit {
public name: string="";
public age: number=0;
public company: string="";
public package: number=0;
public employes:any=[
  {
    name:'ajay',age:20,company:'tcs',package:12
  },
  {
    name:'vijay',age:25,company:'lti',package:15
  }
]



  constructor() { }

  ngOnInit(): void {
  }

  register(){
    let employe={
      name:this.name,
      age:this.age,
      company:this.company,
      package:this.package
    }

    this.employes.push(employe);

    this.name="";
    this.age=0;
    this.company="";
    this.package=0;

    alert("register successfully");
  }
  delete(i:number){
    this.employes.splice(i,1)
  }

}
