import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public id:string="";
  public account:any=[];

  constructor( private _bankservice:BankService, private _activetedRoute:ActivatedRoute) {
    this._activetedRoute.params.subscribe(
      (data:any)=>{
        this.id =data.id;
        this._bankservice.getAccount(data.id).subscribe(
          (data:any)=>{
            this.account =data;
          }
        )
      }
    )
  }

  ngOnInit(): void {
  }


  }