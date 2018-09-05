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
export class ForgetPasswordRequestService {

  constructor(private _http:HttpClient) { 
}
forgetpassword(value){
  return this._http.post(Config.forgetpasswordUrl,value)
}
}


