import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddlibraryComponent } from './addlibrary/addlibrary.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewallComponent } from './viewall/viewall.component';
import { SearchbookComponent } from './searchbook/searchbook.component';

const appRoutes:Routes=[
  {
    path:"",component:AddlibraryComponent
  },
  {
    path:"view",component:ViewallComponent
  },
  {
    path:"search",component:SearchbookComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddlibraryComponent,
    NavbarComponent,
    ViewallComponent,
    SearchbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
   HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
