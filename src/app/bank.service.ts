import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private _httpClient:HttpClient,) { }
getAccounts():Observable<any>{
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page=1')
}
getAccount(id:string):Observable<any>{
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id)
}

getBankAccount(bank:string){
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter='+bank)
}
getPageAccount(page:number){
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page='+page)
}
getsortedAccount(column:string,order:string){
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortby='+column+'&order='+order);
}
  createAccount(data:any):Observable<any>{
    return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/principals',data);
  
}
updateAccount(id:string,data:any):Observable<any>{
  return this._httpClient.put('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id,data);

}
deleteAccount(id:any):Observable<any>{
  return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id);

}

}
