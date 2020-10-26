import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-dashboard-charts',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-charts.component.html',
    styleUrls: ['dashboard-charts.component.scss'],
})
export class DashboardChartsComponent implements OnInit {
    dataForPosting :any =[];
    eventsData:any = [];
    restaurantsData : any =[];
    classfiedsData : any =[];
    realEstatesData : any =[];
    jobsData : any =[];
    
    
    constructor() {}
    ngOnInit() {
        this.dataForPosting = {
                "labels": ['Pending', 'Approved', 'Close by User', 'Closed by Admin'],
                "data":[45,26,52,12]
            }
            
            this.eventsData = {
                "labels": ['Pending', 'Approved', 'Close by User', 'Closed by Admin'],
                "data":[17,19,152,121]
            }    
            this.restaurantsData = {
                "labels": ['Pending', 'Approved', 'Close by User', 'Closed by Admin'],
                "data":[145,26,152,12]
            }    
            this.classfiedsData = {
                "labels": ['Pending', 'Approved', 'Close by User', 'Closed by Admin'],
                "data":[75,86,152,12]
            } 
            this.realEstatesData = {
                "labels": ['Pending', 'Approved', 'Close by User', 'Closed by Admin'],
                "data":[405,26,152,72]
            } 
            this.jobsData = {
                "labels": ['Pending', 'Approved', 'Close by User', 'Closed by Admin'],
                "data":[1126,1152,1450,650]
            }             
    
    }
}
