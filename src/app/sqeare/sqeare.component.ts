import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sqeare',
  templateUrl: './sqeare.component.html',
  styleUrls: ['./sqeare.component.css']
})
export class SqeareComponent implements OnInit {
  public length:number =0;
  public result:number =0;

  constructor() { }

  ngOnInit(): void {
  }
  area(){
    this.result=this.length*this.length
  }
  perimeter(){
    this.result=4*(this.length)
  }
}
