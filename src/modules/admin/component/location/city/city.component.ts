import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormGroupDirective } from '@angular/forms';
import { MasterService } from '@modules/admin/service/master.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  
  cols:any= [];
  data:any = [];
  showForm:any = false;
  pagination:any = {totalRecords:0,perPage:10};
  pageNo:any = 1;
  loading = false;
  submitted = false;
  formFields:FormGroup;
  header = "Add/Edit City";
  
  constructor(private masterService: MasterService,private formBuilder: FormBuilder,private ref: ChangeDetectorRef,private messageService: MessageService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'stateCode', header: 'State Name' },
      { field: 'name', header: 'City Name' },      
      { field: 'lattitude', header: 'Lattitude' },
      { field: 'longitude', header: 'Longitude' },
      { field: 'cityImage', header: 'City Image' },
      { field: 'weatherApiId', header: 'Weather Api Id' }


  ];
    this.loadAPI(0);
    this.formFields = this.formBuilder.group({
        name: ['', Validators.required],
        stateCode: ['', Validators.required],
        lattitude: ['', Validators.required],
        longitude: ['', Validators.required],
        cityImage: ['', Validators.required],
        weatherApiId: ['', Validators.required],
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
      this.masterService.getCity(pageNo,start,end).then(
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
  this.messageService.add({severity:'success', summary:'Add/Edit City', detail:'Data has been saved successfully.'});
  // display form values on success
 // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formFields.value, null, 4));
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
    stateCode:rowData.stateCode
  });
 
}
onReset(){
  
}
}
