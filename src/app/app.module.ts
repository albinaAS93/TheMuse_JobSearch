import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { OffersComponent } from './components/offers/offers.component';
import { JobDescriptionComponent } from './components/job-description/job-description.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqKCl7l2Geo8XKz4QCObqASveAFQXpX2g",
  authDomain: "progetto-angular-1.firebaseapp.com",
  projectId: "progetto-angular-1",
  storageBucket: "progetto-angular-1.appspot.com",
  messagingSenderId: "162085607655",
  appId: "1:162085607655:web:7ae3620b2787cd3762aa42"
};

const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    OffersComponent,
    JobDescriptionComponent,
    CompanyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
