import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'sb-charts-bar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './charts-bar.component.html',
    styleUrls: ['charts-bar.component.scss'],
})
export class ChartsBarComponent implements OnInit, AfterViewInit {
    @ViewChild('myBarChart') myBarChart!: ElementRef<HTMLCanvasElement>;
    chart!: Chart;
    @Input ('data') data:any;

    constructor() {}
    ngOnInit() {}

    ngAfterViewInit() {
        this.chart = new Chart(this.myBarChart.nativeElement, {
            type: 'bar',
            data: {
                labels: this.data.labels,
                datasets: [
                    {
                        label: 'Revenue',
                        backgroundColor: '#0069D9',
                       
                        categoryPercentage: 0.4,
                        borderColor: '#0069D9',
                        data: this.data.data
                    },
                ],
            },
            options: {
               
                scales: {
                    xAxes: [
                        {
                            time: {
                                unit: 'month',
                            },
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                maxTicksLimit: 6,
                            },
                            
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                min: 0,
                                // max: 15000,
                                maxTicksLimit: 5,
                            },
                            gridLines: {
                                display: true,
                            },
                        },
                    ],
                },
                legend: {
                    display: false,
                },
            },
        });
    }
}
