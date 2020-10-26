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
            {
                "id": "1000",
                "code": "f230fh0g3",
                "name": "Bamboo Watch",
                "description": "Product Description",
                "image": "bamboo-watch.jpg",
                "price": 65,
                "category": "Accessories",
                "quantity": 24,
                "inventoryStatus": "INSTOCK",
                "rating": 5
            },
            {
                "id": "1001",
                "code": "nvklal433",
                "name": "Black Watch",
                "description": "Product Description",
                "image": "black-watch.jpg",
                "price": 72,
                "category": "Accessories",
                "quantity": 61,
                "inventoryStatus": "INSTOCK",
                "rating": 4
            },
            {
                "id": "1002",
                "code": "zz21cz3c1",
                "name": "Blue Band",
                "description": "Product Description",
                "image": "blue-band.jpg",
                "price": 79,
                "category": "Fitness",
                "quantity": 2,
                "inventoryStatus": "LOWSTOCK",
                "rating": 3
            }]
    }
}
