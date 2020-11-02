import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormGroupDirective } from '@angular/forms';
import { MasterService } from '@modules/admin/service/master.service';
import {MessageService} from 'primeng/api';
import * as _ from 'lodash';
import { MustMatch } from '../../../../../helpers/must-match.validator';
@Component({
  selector: 'admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.scss','../../master/module/module.component.scss']
})
export class AdminDetailsComponent implements OnInit {

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
    roleList = [ {id:1,"name":"Country Admin"},
    {id:2,"name":"State Admin"},
    {id:3,"name":"City Admin"},
    {id:4,"name":"Zone Admin"},
    {id:5,"name":"Special Admin"},
    {id:6,"name":"Indipendent Agent"}
  ];
  countryList = [ {id:1,"name":"India"},{id:2,"name":"Japan"}];

  allStateList =[
    {id:1,"name":"Tamil Nadu","code":"TN",countryId:1},
    {id:2,"name":"Kerala","code":"KL",countryId:1},
    {id:3,"name":"Akita","code":"AK",countryId:2},
    {id:4,"name":"Tokyo","code":"AK",countryId:2},
    {id:5,"name":"Gifu","code":"AK",countryId:2},
    {id:6,"name":"Iwate","code":"AK",countryId:2},
  ];

  allCityList =[

    {id:1,"name":"Chennai",stateId:1,countryId:1},
    {id:2,"name":"Madurai",stateId:1,countryId:1},
    {id:3,"name":"Trichy",stateId:1,countryId:1},
    {id:4,"name":"Salem",stateId:1,countryId:1},
    {id:5,"name":"Kochin",stateId:2,countryId:1},
    {id:6,"name":"Kollam",stateId:2,countryId:1},
    {id:7,"name":"Yokohama",stateId:3,countryId:2},
    {id:8,"name":"Toyohashi",stateId:3,countryId:2},
    {id:9,"name":"Toyokawa",stateId:4,countryId:2},
    {id:10,"name":"Kariya",stateId:5,countryId:2},
    {id:11,"name":"Chita",stateId:6,countryId:2},
    {id:11,"name":"Nisshin",stateId:6,countryId:2},
  ]

  stateList:any =[];
  cityList:any =[];
  zoneList:any =[];
  allZoneList =[

    {id:1,"name":"South Zone",countryId:1,stateId:1,cityId:1},
    {id:2,"name":"North zone",countryId:1,stateId:1,cityId:1},
    {id:2,"name":"Mandurai East",countryId:1,stateId:1,cityId:2},
    {id:2,"name":"Mandurai North",countryId:1,stateId:1,cityId:2},
    {id:2,"name":"Tricy Mandalom",countryId:1,stateId:1,cityId:3},
   
    
  ]
  showFlag :any= {country:true,state:false,city:false,zone:false};
  constructor(private masterService: MasterService,private formBuilder: FormBuilder,private ref: ChangeDetectorRef,private messageService: MessageService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'name', header: 'Name' },
      {field: 'emailId', header: 'Email Id' },
      {field: 'contactNumber', header: 'Contact' },
      {field: 'role', header: 'Role' },
      {field: 'country', header: 'Country' },
      {field: 'state', header: 'State' },
      
      {field: 'status', header: 'Status' },


  ];
    this.loadAPI(0);
    this.formFields = this.formBuilder.group({
        name: ['', Validators.required],
        emailId: ['', [Validators.required,Validators.email]],
        contactNumber: ['', Validators.required],
        roleId: ['', Validators.required],
        countryId: ['', Validators.required],
        stateId: [''],
        cityId: [''],
        zoneId: [''],
        password: ['tnonline2017', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['tnonline2017', [Validators.required,Validators.minLength(6)]],

    },
     {
      validator: MustMatch('password', 'confirmPassword')
    }
    );
 
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
      this.masterService.getAdminList(pageNo,start,end).then(
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

   console.log("syssss:",this.formFields.value)
  this.submitted = true;
  console.log("invalid:",this.formFields.invalid)
  // stop here if form is invalid
  if (this.formFields.invalid) {
      return;
  }
  this.messageService.add({severity:'success', summary:'Add/Edit Module', detail:'Data has been saved successfully.'});
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
    postingStatus:rowData.posting,
    imageLogo :'test',
    emailId:rowData.emailId,
    contactNumber:rowData.contactNumber,
    countryId:rowData.countryId,
    stateId:rowData.stateId,
    roleId:rowData.roleId
  });
  this.imageUrl = rowData.imagePath;
  this.changeRole();
  this.countryChange();
  
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

  toggle(){
    this.showForm = !this.showForm;
  }
  public doGlobalFilter(text: string) {
    console.log("global search text: ", text);
    this.dt.filterGlobal(text, 'contains');
  }

  changeRole() {
    var roleList = [ {id:1,"name":"Country Admin"},
    {id:2,"name":"State Admin"},
    {id:3,"name":"City Admin"},
    {id:4,"name":"Zone Admin"},
    {id:5,"name":"Special Admin"},
    {id:6,"name":"Indipendent Agent"}
  ];
    let roleId = this.formFields.get("roleId")?.value;
    console.log("this",roleId)

    switch(roleId) {
      case 1: //Country
        this.showFlag= {country:true,state:false,city:false,zone:false};

        this.formFields.get("stateId")?.clearValidators();
        this.formFields.get("cityId")?.clearValidators();
        this.formFields.get("zoneId")?.clearValidators();
        break;
      case 2: //State Admin
        this.showFlag= {country:true,state:true,city:false,zone:false};
        this.formFields.get("stateId")?.setValidators([Validators.required]);
        this.formFields.get("cityId")?.clearValidators();
        this.formFields.get("zoneId")?.clearValidators();
        break;
      case 3: //City Admin
        this.showFlag= {country:true,state:true,city:true,zone:false};
        this.formFields.get("stateId")?.setValidators([Validators.required]);
        this.formFields.get("cityId")?.setValidators([Validators.required]);
        this.formFields.get("zoneId")?.clearValidators();
        break;
      case 4: //Zone Admin
        this.showFlag= {country:true,state:true,city:true,zone:true};
        this.formFields.get("stateId")?.setValidators([Validators.required]);
        this.formFields.get("cityId")?.setValidators([Validators.required]);
        this.formFields.get("zoneId")?.setValidators([Validators.required]);
        
        break;
      case 5: //Special Admin
          this.showFlag= {country:true,state:false,city:false,zone:false};
          break;
       case 6: //Indipendent Agent
            this.showFlag= {country:true,state:false,city:false,zone:false};
            break;
      default:
        this.showFlag= {country:true,state:false,city:false,zone:false};
    }

    this.formFields.updateValueAndValidity();
  }

  countryChange(){
    let countryId = this.formFields.get("countryId")?.value;
    if(countryId){
      this.formFields.get("stateId")?.patchValue('');
      this.formFields.get("stateId")?.updateValueAndValidity();
      this.formFields.get("cityId")?.patchValue('');
      this.formFields.get("cityId")?.updateValueAndValidity();
      this.formFields.get("zoneId")?.patchValue('');
      this.formFields.get("zoneId")?.updateValueAndValidity();
      this.stateList = _.filter(this.allStateList,{"countryId":countryId})
    }
  }

  stateChange(){
    let countryId = this.formFields.get("countryId")?.value;
    let stateId = this.formFields.get("stateId")?.value;
    if(countryId && stateId){
      this.formFields.get("cityId")?.patchValue('');
      this.formFields.get("cityId")?.updateValueAndValidity();
      this.cityList = _.filter(this.allCityList,{"countryId":countryId,"stateId":stateId})
    }
  }
  cityChange(){
    let countryId = this.formFields.get("countryId")?.value;
    let stateId = this.formFields.get("stateId")?.value;
    let cityId = this.formFields.get("cityId")?.value;
    if(countryId && stateId && cityId ){
      this.formFields.get("zoneId")?.patchValue('');
      this.formFields.get("zoneId")?.updateValueAndValidity();
      this.zoneList = _.filter(this.allZoneList,{"countryId":countryId,"stateId":stateId,"cityId":cityId})
    }
  }

}
