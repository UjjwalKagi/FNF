import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Config } from '../config.config';

@Injectable({
  providedIn: 'root'
})
export class CustomerCreationRequestService {

  constructor(private _http:HttpClient) { }
  customercreation(value){
    return this._http.post(Config.customercreationUrl,value);
  }
}
