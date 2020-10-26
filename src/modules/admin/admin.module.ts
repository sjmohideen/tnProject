import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoMasterComponent } from './component/logo-master/logo-master.component';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { PrimeNgModule } from '@modules/primeng/primeng.module';
import { BookService } from './service/book.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ModuleComponent } from './component/master/module/module.component';
import { MasterService } from './service/master.service';
import { CategoryComponent } from './component/master/category/category.component';
import { CountryComponent } from './component/location/country/country.component';
import { StateComponent } from './component/location/state/state.component';
import { CityComponent } from './component/location/city/city.component';
import { LocalityComponent } from './component/location/locality/locality.component';
import { TestComponent } from './component/location/test/test.component';



@NgModule({
  declarations: [LogoMasterComponent, ModuleComponent, CategoryComponent, CountryComponent, StateComponent, CityComponent, LocalityComponent, TestComponent],
  imports: [
    CommonModule,
    NavigationModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[LogoMasterComponent],
  providers:[BookService,MasterService]
})
export class AdminModule { }
