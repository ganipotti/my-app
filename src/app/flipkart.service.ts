import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {

  constructor(private _httpclient:HttpClient) { }
  getflipkart(){
    return this._httpclient.get("https://fakestoreapi.com/products");

  }
}
