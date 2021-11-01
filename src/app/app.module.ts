import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarTransparentComponent } from './navbar-transparent/navbar-transparent.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultPageComponent } from './result-page/result-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarTransparentComponent,
    HomepageComponent,
    FormulaireComponent,
    TeamPageComponent,
    ResultListComponent,
    ContactPageComponent,
    ContactFormComponent,
    ResultPageComponent,
    ErrorPageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
