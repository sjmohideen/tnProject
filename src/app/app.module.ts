import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AdminRoutingModule } from '../modules/admin/admin.routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from '@modules/auth/guards';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule,AdminRoutingModule,ReactiveFormsModule,FormsModule,BrowserAnimationsModule
],
    providers: [AuthGuard],
    bootstrap: [AppComponent],
})
export class AppModule {}
