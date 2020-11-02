import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminModule } from './admin.module';
import { CategoryComponent } from './component/master/category/category.component';
import { LogoMasterComponent } from './component/master/logo-master/logo-master.component';
import { ModuleComponent } from './component/master/module/module.component';
import { CountryComponent } from './component/location/country/country.component';
import { CityComponent } from './component/location/city/city.component';
import { StateComponent } from './component/location/state/state.component';
import { LocalityComponent } from './component/location/locality/locality.component';
import { TestComponent } from './component/location/test/test.component';
import { AdminDetailsComponent } from './component/security/admin-details/admin-details.component';
const routes: Routes = [
  {path:'logoMaster',component:LogoMasterComponent},
  {path:'module',component:ModuleComponent},
  {path:'category',component:CategoryComponent},
  {path:'country',component:CountryComponent},
  {path:'city',component:CityComponent},
  {path:'state',component:StateComponent},
  {path:'locality',component:LocalityComponent},
  {path:'test',component:TestComponent},
  {path:'admin-details',component:AdminDetailsComponent},
  
];


@NgModule({
  imports: [AdminModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }