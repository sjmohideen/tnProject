import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import {CarouselModule} from 'primeng/carousel';

@Component({
    selector: 'sb-layout-auth',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './layout-auth.component.html',
    styleUrls: ['layout-auth.component.scss'],
})
export class LayoutAuthComponent implements OnInit {
    products: any =[];
    constructor() {}
    ngOnInit() {
        this.products =  [
           {"image": "1.jpg"}, {"image": "2.jpg"}, {"image": "3.jpg"}, {"image": "4.jpg"}, {"image": "5.jpg"}, {"image": "6.jpg"}, {"image": "7.jpg"},
           {"image": "8.jpg"}, {"image": "9.jpg"}, {"image": "10.jpg"}, {"image": "11.jpg"}, {"image": "12.jpg"}, {"image": "13.jpg"}, {"image": "14.jpg"},
           {"image": "15.jpg"}
        ]
    }
}
