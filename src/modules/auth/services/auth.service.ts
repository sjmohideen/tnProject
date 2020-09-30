import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
    constructor() {}

    getAuth$(): Observable<{}> {
        return of({});
    }
    isLoggedIn(){
       // let userInfo =  localStorage.getItem('userInfo');
       let userInfo = this.getUserInfo();
       if(userInfo){
           return true;
       }else{
           return false;
       }
      

    }
    setUserInfo(userInfo:any){
        localStorage.setItem("userInfo",userInfo)
    }
    getUserInfo(){
        return localStorage.getItem("userInfo");
    }
}
