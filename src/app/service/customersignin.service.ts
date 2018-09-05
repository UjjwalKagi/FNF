import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Config } from '../config.config';
const httpOptions={

  headers:new HttpHeaders({
    'Access-Control-Allow-origin':'*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CustomersigninService {

  constructor(private _http:HttpClient) { }
  customersignin(value){
    return this._http.post(Config.customersigninUrl,value)
  }
}
