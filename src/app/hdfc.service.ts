import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HdfcService {
  public balence: number=0;

  constructor() { }
  
  deposit(amount:number){
    this.balence = this.balence+amount;
  }
   withdraw(amount:number){
    this.balence =this.balence-amount;
  }
  getBalence(){
    return this.balence;
  }
}
