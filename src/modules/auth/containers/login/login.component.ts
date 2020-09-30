import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(private authService:AuthService,private router:Router) {}
    ngOnInit() {}
    submitForm(){
        console.log("submitting...");
        let userObj:any = {userName:"admin"}
        this.authService.setUserInfo(userObj);
        this.router.navigate(['/dashboard'])
    }
}
