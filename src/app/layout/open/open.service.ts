import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OpenService {
  employees=[];
  constructor(private _http:Http) { }
  checkMe:any;
  getOpenings(){
    return this._http.get("http://localhost/hr/api_getOpening.php")
      .map(res=>{
        this.checkMe = res;
        if(this.checkMe._body !== "0"){
          
          console.log(res.json());
          //  return res.json()
          
        }
       
      });
  }

}
