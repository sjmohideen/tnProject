import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormGroupDirective } from '@angular/forms';
import { MasterService } from '@modules/admin/service/master.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss','../../master/module/module.component.scss']
})
export class CountryComponent implements OnInit {
  @ViewChild('dt') dt: any;
  cols:any= [];
  data:any = [];
  showForm:any = false;
  pagination:any = {totalRecords:0,perPage:10};
  pageNo:any = 1;
  loading = false;
  submitted = false;
  formFields:FormGroup;
  header = "Add/Edit Country";
  languageList = [ {id:1,"name":"English"},
                  {id:2,"name":"Spanish"},
                  {id:3,"name":"Arabic"},
                  {id:4,"name":"Urdu"},
                  {id:5,"name":"Hindi"},
                  {id:6,"name":"Japanish"}
                ];
  fileExt ='';
  showErrorFile = false;
  acceptFileExt =["png","jpg"];
  /*########################## File Upload ########################*/
  @ViewChild('fileInput') el: ElementRef;
  //imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  imageUrl: any = '/assets/img/no_preview.png';
  editFile: any = true;
  removeUpload: boolean = false;
  constructor(private masterService: MasterService,private formBuilder: FormBuilder,private ref: ChangeDetectorRef,private messageService: MessageService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'name', header: 'Country Name' },
      { field: 'countryCode', header: 'Country Code' },
      { field: 'callingCode', header: 'Calling Code' },
      { field: 'currencyCode', header: 'Currency Code' },
      // { field: 'currencyText', header: 'Currency Text' },
      { field: 'primaryLanguage', header: 'Primary Language' },
      // { field: 'secondaryLanguage', header: 'Secondary Language' },
      { field: 'status', header: 'Status' },


  ];
    this.loadAPI(0);
    this.formFields = this.formBuilder.group({
        name: ['', Validators.required],
        countryCode: ['', Validators.required],
        callingCode: ['', Validators.required],
        currencyCode: ['', Validators.required],
        currencyText: ['', Validators.required],
        primaryLanguage: ['', Validators.required],
        secondaryLanguage: ['', Validators.required],
        imageLogo: ['', Validators.required]
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
      this.masterService.getCountry(pageNo,start,end).then(
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
  this.messageService.add({severity:'success', summary:'Add/Edit Country', detail:'Data has been saved successfully.'});
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
    countryCode:rowData.countryCode,
    callingCode:rowData.callingCode,
    currencyCode:rowData.currencyCode,
    currencyText:rowData.currencyText,
    primaryLanguage:rowData.primaryLanguageId,
    secondaryLanguage:rowData.secondaryLanguageId,
    imageLogo:rowData.imagePath




  });
  this.imageUrl = rowData.imagePath;
 
}

onReset(){
  
}

public doGlobalFilter(text: string) {
  console.log("global search text: ", text);
  this.dt.filterGlobal(text, 'contains');
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
           this.imageUrl = reader.result;
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

}
