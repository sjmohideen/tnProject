import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminModule } from './admin.module';
import { CategoryComponent } from './component/master/category/category.component';
import { LogoMasterComponent } from './component/logo-master/logo-master.component';
import { ModuleComponent } from './component/master/module/module.component';
const routes: Routes = [
  {path:'master',component:LogoMasterComponent},
  {path:'module',component:ModuleComponent},
  {path:'category',component:CategoryComponent},
  
];


@NgModule({
  imports: [AdminModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }