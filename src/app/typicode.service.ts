import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypicodeService {

  constructor(private _httpClient:HttpClient) { }

  postTypicode(){
    return this._httpClient.get('https://jsonplaceholder.typicode.com/posts')
  }

}
