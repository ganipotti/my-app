import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  public number:number =0;
  public number2:number =0;
  public result:number =0;

  constructor() { }

  ngOnInit(): void {
  }
  power(){
    this.result=this.number*this.number
  }
  cube(){
    this.result= this.number*this.number*this.number
  }
  nthpower(){
    this.result= Math.pow(this.number,this.number2)
  }

}
