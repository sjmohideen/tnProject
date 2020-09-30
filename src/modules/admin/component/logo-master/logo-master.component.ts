import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormGroupDirective } from '@angular/forms';

import { SortEvent } from 'primeng/api';
import { BookService } from '@modules/admin/service/book.service';

@Component({
  selector: 'logo-master',
  templateUrl: './logo-master.component.html',
  styleUrls: ['./logo-master.component.scss']
})
export class LogoMasterComponent implements OnInit {

  cols:any= [];
  books:any = [];
  showForm:any = false;
   
    pagination:any = {totalRecords:0,perPage:10};
    pageNo:any = 1;
    
    loading = false;
    
    
    submitted = false;


    // @ViewChild(GenerateFormComponent) form: GenerateFormComponent;
    // columnLayout = 3;
    // formStatus = false;
    // optionLabel = 'name';
    // options = [{ 'name': 'India', 'value': 'IN' },
    // { 'name': 'USA', 'value': 'US' }];
    // formFields =[
    //   {
    //        "className":"text",
    //        "label":"Name",
    //        "formControlName":"name",
    //        "value":"",
    //        "size":10,
    //        validations: [
    //         {
    //           name: "required",
    //           validator: Validators.required,
    //           message: "Name Required"
    //         },
    //         {
    //           name: "minlength",
    //           validator: Validators.minLength(10),
    //           message: "Minimum 10 Character   Required"
    //         }
           
    //       ]
    //     },
    //       {
    //                  "className":"text",
    //                  "label":"Title",
    //                  "formControlName":"title",
    //                  "value":"",
    //                  validations: [
                    
    //                     {
    //                       name: "required",
    //                       validator: Validators.required,
    //                       message: "Title Required"
    //                     },
    //                   {
    //                     name: "minlength",
    //                     validator: Validators.minLength(8),
                        
    //                     message: "Minimum 8 Character Required"
    //                   },
    //                   {
    //                     name: "maxlength",
    //                     validator: Validators.maxLength(100),
                        
    //                     message: "maximum 100 Name Required"
    //                   },
    //                  ]
    //      }
    // ];
    registerForm:FormGroup;
    
  constructor(private bookService: BookService,private ref: ChangeDetectorRef,private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("Welcome:")
      this.bookService.getBooks().then(books => this.books = books);

      this.cols = [
        { field: 'name', header: 'Title' },
        {field: 'author', header: 'Domain ' },
        { field: 'price', header: 'Co' }      
    ];
   


    this.registerForm =  this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  });
  this.ref.detectChanges();
  
}
get f() { return this.registerForm.controls; }

  customSort(event: SortEvent) {
    console.log("event:",event)
    // event.data.sort((data1, data2) => {
    //     let value1 = data1[event.field];
    //     let value2 = data2[event.field];
    //     let result = null;

    //     if (value1 == null && value2 != null)
    //         result = -1;
    //     else if (value1 != null && value2 == null)
    //         result = 1;
    //     else if (value1 == null && value2 == null)
    //         result = 0;
    //     else if (typeof value1 === 'string' && typeof value2 === 'string')
    //         result = value1.localeCompare(value2);
    //     else
    //         result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

    //     return (event.order * result);
    // });
}


loadData(event:any) {
  console.log("loadData:",event.first)
   let pageNo:any = event.first > 0 ?   event.first/ this.pagination.perPage :0;
   this.loadAPI(pageNo);
  this.loading = true;
  setTimeout(() => {
    this.loading = false;
  }, 2000);


}


loadAPI(pageNo = 0,start=0,end=0){

    
  this.bookService.getData(pageNo,start,end).then(
  
    
    books=>{
            setTimeout(() => {
            this.books = books;     
      this.loading = false;
      // this.files2 = this.globalService.mulitiTransformData(files);
      // console.log(JSON.stringify(this.files2))
      this.pagination.totalRecords = 125;//this.files2.length;
    }, 2000);
      //this.files2 = files;//this.globalService.transformData(files);
      
    
    }
  );

}


toggleForm(){
  this.showForm = !this.showForm;
}

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
  this.submitted = false;
  this.registerForm.reset();
}

ngAfterViewInit() {
  
  this.ref.detectChanges();
}

}
