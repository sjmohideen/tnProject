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
export class MasterService {

  constructor(private http: HttpClient) {}

  
    getData(pageNo =0 ,start=0,end=0) {
        let fileName  = 'assets/json/books_'+pageNo+".json";
        console.log("fileName:",fileName)
        return this.http.get<any>(fileName)
        .toPromise()
        .then(res => <Book[]>res.data)
        .then(data => { return data; });
    }
    getModule(pageNo =0 ,start=0,end=0) {
        let fileName  = 'assets/json/module_'+pageNo+".json";
        console.log("fileName:",fileName)
        return this.http.get<any>(fileName)
        .toPromise()
        .then(res =>res.data)
        .then(data => { return data; });
    }
    getCategory(pageNo =0 ,start=0,end=0){
      let fileName  = 'assets/json/category_'+pageNo+".json";
      console.log("fileName:",fileName)
      return this.http.get<any>(fileName)
      .toPromise()
      .then(res =>res.data)
      .then(data => { return data; });
    }
    
    getCountry(pageNo =0 ,start=0,end=0){
      let fileName  = 'assets/json/country_'+pageNo+".json";
      console.log("fileName:",fileName)
      return this.http.get<any>(fileName)
      .toPromise()
      .then(res =>res.data)
      .then(data => { return data; });
    }
     
}
