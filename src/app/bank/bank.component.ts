import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  public accounts:any=[];
  public bank:any ='';
  public column:string ="";
  public order:string = "";

  constructor(private _bankService:BankService, private route:Router ) {

  this._bankService.getAccounts().subscribe(
 (data:any)=>{
 this.accounts = data;
 },
 (error:any)=>{
 alert('Internal server error')
 }
  )
   }

  ngOnInit(): void {
  }

  getBank(){
    this._bankService.getBankAccount(this.bank).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (error:any)=>{
         alert('Connect the server')
      }
      )
    
  }
  pagination(page:number){
    this._bankService.getPageAccount(page).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (error:any)=>{
         alert('Connect the server')
      }
    )
  }
  sort(){
    this._bankService.getsortedAccount(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (error:any)=>{
        alert('Connect the server');

  }
    )

}
delete(id:string){
  this._bankService.deleteAccount(id).subscribe(
    (data:any)=>{
   alert("deleted successfully..!!");
   location.reload();
    },
    (error:any)=>{
      alert('Connect the server');

}
  )
}
view(id:string){
  this.route.navigateByUrl('/dashboard/view/'+id);
}
}