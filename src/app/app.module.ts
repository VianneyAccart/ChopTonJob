import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NavbarComponent} from './navbar/navbar.component';
import {HomepageComponent} from './homepage/homepage.component';
import {FormulaireComponent} from './formulaire/formulaire.component';
import {TeamPageComponent} from './team-page/team-page.component';
import {ResultListComponent} from './result-list/result-list.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ResultPageComponent} from './result-page/result-page.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {FooterComponent} from './footer/footer.component';
import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {MentionsLegalesComponent} from './mentions-legales/mentions-legales.component';
import {GuideComponent} from './guide/guide.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FormulaireComponent,
    TeamPageComponent,
    ResultListComponent,
    ContactPageComponent,
    ContactFormComponent,
    ResultPageComponent,
    ErrorPageComponent,
    FooterComponent,
    MentionsLegalesComponent,
    GuideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
