
import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate,Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService:AuthService,private actRoute:ActivatedRoute,private rout:Router){

    }
    canActivate(): Observable<boolean> {
        //return of(true);
        let loggedInFlag = this.authService.isLoggedIn();
        if(loggedInFlag == false){
            this.rout.navigate(['/auth/login']);
        }
        console.log("loggedInFlag:",loggedInFlag)
        return of (loggedInFlag);
    }
}
