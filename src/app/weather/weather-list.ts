import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

return Observable.interval(2000) 
    .switchMap(() => this.http.get(url).map(res:Response => res.json()));


export class ProductListComponent {
    pageTitle: string = 'ProductList';
    imageWidth: number = 50;
    imageHeight: number = 50;
    showImage: boolean = false;
    _listFilter: string;

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products
    } 
    weatherDays: IProduct[];

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }
    toggleImage(): void {
                this.showImage = !this.showImage
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
        console.log('In OnInit')
        this.toggleImage()
    }
}