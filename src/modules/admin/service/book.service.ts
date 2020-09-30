import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Book {
  name:any;
  price:any;
  author:any;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<any>('assets/json/books.json')
      .toPromise()
      .then(res => <Book[]>res.data)
      .then(data => { return data; });
    }

    getData(pageNo =0 ,start=0,end=0) {
      let fileName  = 'assets/json/books_'+pageNo+".json";
      console.log("fileName:",fileName)
      return this.http.get<any>(fileName)
        .toPromise()
        .then(res => <Book[]>res.data)
        .then(data => { return data; });
      }
      getCountry(pageNo = 0,start=0,end=0) {
        let fileName  = 'assets/json/country_'+pageNo+".json";
        console.log("fileName:",fileName)
        return this.http.get<any>(fileName)
          .toPromise()
          .then(res => <Book[]>res.data)
          .then(data => { return data; });
        }
     
}
