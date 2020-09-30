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



@NgModule({
  declarations: [LogoMasterComponent, ModuleComponent, CategoryComponent],
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
