import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventreg',
  templateUrl: './eventreg.component.html',
  styleUrls: ['./eventreg.component.css']
})
export class EventregComponent implements OnInit {
public name: string="";
public names:string[]=[];

  constructor() { }

  ngOnInit(): void {
  }
register(){
  if(this.name !="")
  this.names.push (this.name);
  this.name="";
  
}
delete(){
  this.names.pop();
}
}
