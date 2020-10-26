import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormGroupDirective } from '@angular/forms';

@Component({
    selector: 'sb-forgot-password',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './forgot-password.component.html',
    styleUrls: ['forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
    formFields:FormGroup;
    submitted = false;
    loading = false;
    constructor(private formBuilder: FormBuilder,private ref: ChangeDetectorRef) {}
    ngOnInit() {
        this.formFields = this.formBuilder.group({
            emailId: ['', [Validators.required,Validators.email]],
        });
    }

    submitForm() {
       
        this.submitted = true;
        console.log("freq:",this.formFields.value.moduleId)
        // stop here if form is invalid
        if (this.formFields.invalid) {
            return;
        }
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
            
        }, 1500);
        
        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formFields.value, null, 4));
      }
      get f() { return this.formFields.controls; }
    
}
