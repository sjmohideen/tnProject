import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@modules/auth/services';
import { AuthService } from '../../../auth/services';

@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {
    constructor(public userService: UserService,private router:Router,private authService:AuthService) {}
    ngOnInit() {

    }
    logOut(){
        this.authService.logout();
        console.log("Logouts")
       
        this.router.navigate(['/admin/auth/login'],{ queryParams: { 'logout': 1 }});
        return false;
        
       

    }
}
