import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormGroupDirective } from '@angular/forms';
import { MasterService } from '@modules/admin/service/master.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss','../../master/module/module.component.scss']
})
export class StateComponent implements OnInit {

  @ViewChild('dt') dt: any;
  cols:any= [];
  data:any = [];
  showForm:any = false;
  pagination:any = {totalRecords:0,perPage:10};
  pageNo:any = 1;
  loading = false;
  submitted = false;
  formFields:FormGroup;
  fileExt ='';
  showErrorFile = false;
  acceptFileExt =["png","jpg"];
    /*########################## File Upload ########################*/
    @ViewChild('fileInput') el: ElementRef;
    //imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    imageUrl: any = '/assets/img/no_preview.png';
    editFile: any = true;
    removeUpload: boolean = false;
    countryList = [ {id:1,"name":"India"},
                  {id:2,"name":"Japan"},
                  
                ];
  constructor(private masterService: MasterService,private formBuilder: FormBuilder,private ref: ChangeDetectorRef,private messageService: MessageService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'name', header: 'State Name' },
      { field: 'stateCode', header: 'State Code' },
      { field: 'defaultCity', header: 'Default City' },
      {field: 'countryName', header: 'Country Name ' },
      {field: 'status', header: 'Status' },


  ];
    this.loadAPI(0);
    this.formFields = this.formBuilder.group({
        name: ['', Validators.required],
        code: ['', Validators.required],
        countryId: ['', Validators.required],
        defaultCityName: ['', Validators.required]
    });
 
  }
  loadData(event:any) {
    
     let pageNo:any = event.first > 0 ?   event.first/ this.pagination.perPage :0;
     this.loadAPI(pageNo);
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  
  }
  get f() { return this.formFields.controls; }
  
  loadAPI(pageNo = 0,start=0,end=0){
      this.masterService.getState(pageNo,start,end).then(
       result=>{
              setTimeout(() => {
              console.log("books:",result)
              this.data = result;     
              this.loading = false;
            this.pagination.totalRecords = 12;//this.files2.length;
      }, 2000);
        
      }
    );
  
  }

  
onSubmit() {

  this.submitted = true;
  console.log("freq:",this.formFields.value.moduleId)
  // stop here if form is invalid
  if (this.formFields.invalid) {
      return;
  }
  this.messageService.add({severity:'success', summary:'Add/Edit State', detail:'Data has been saved successfully.'});
  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formFields.value, null, 4));
}

ngAfterViewInit() {
  this.ref.detectChanges();
}

/* This is function is called when edit Row*/ 
edit(rowData:any){
  console.log("EditRow:",rowData)
  this.showForm = true;
   this.formFields.patchValue({
    //imageLogo: reader.result
    name:rowData.name,
    countryId:rowData.countryId,
    code:rowData.stateCode
    
  });
  this.imageUrl = rowData.imagePath;
}
  uploadFile(event:any) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
    let fileName = file.name;
     console.log("F:",fileName)
     this.fileExt = fileName.replace(/^.*\./, '').toLowerCase();
     reader.readAsDataURL(file);
    // When file uploads set it to file formcontrol
      reader.onload = () => {
             this.imageUrl = reader.result
            this.formFields.patchValue({
              imageLogo: reader.result
            });
          this.editFile = false;
          this.removeUpload = true;
          this.showErrorFile = false;
       
        if(this.acceptFileExt.indexOf(this.fileExt) != -1 ){
          this.showErrorFile = false;
        }else{
          this.showErrorFile = true;
        }
        console.log("forM:",this.formFields)
      }
      // ChangeDetectorRef since file is loading outside the zone
      //this.ref.markForCheck();        
    }
  }
  toggle(){
    this.showForm = !this.showForm;
  }
  //this.messageService.add({severity:'success', summary:'Add/Edit State', detail:'Data has been saved successfully.'});
  // display form values on success
 // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formFields.value, null, 4));
}

// ngAfterViewInit() {
//   this.ref.detectChanges();
// }

// /* This is function is called when edit Row*/ 
// edit(rowData:any){
//   console.log("EditRow:",rowData)
//   this.showForm = true;
//    this.formFields.patchValue({
//     //imageLogo: reader.result
//     name:rowData.name,
//     stateCode:rowData.stateCode
//   });
 
// }
// onReset(){
  
// }

//}
