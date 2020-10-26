import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    formFields:FormGroup;
    submitted = false;
    loading = false;

    constructor(private authService:AuthService,private router:Router,private formBuilder: FormBuilder) {}
    ngOnInit() {
        this.formFields = this.formBuilder.group({
            emailId: ['', [Validators.required,Validators.email]],
            password: ['', Validators.required]
        });
     
    }
    submitForm(){
       
        this.submitted = true;
        console.log("submitting...");
        if (this.formFields.invalid) {
            return;
        }
        this.loading = true;
        let userObj:any = {userName:"admin"}
        this.authService.setUserInfo(userObj);
        setTimeout(() => {
            this.loading = false;
            this.router.navigate(['admin/dashboard']);
        }, 1500);
      
    }
    get f() { return this.formFields.controls; }
}
