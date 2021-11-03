import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {HomepageComponent} from './homepage/homepage.component';
import {MentionsLegalesComponent} from './mentions-legales/mentions-legales.component';
import {ResultPageComponent} from './result-page/result-page.component';
import {TeamPageComponent} from './team-page/team-page.component';
import { GuideComponent } from './guide/guide.component';


const routes: Routes = [
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'equipe',
    component: TeamPageComponent,
  },
  {
    path: 'guide',
    component: GuideComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'result',
    component: ResultPageComponent,
  },
  {
    path: 'mentions-legales',
    component: MentionsLegalesComponent,
  },
  {
    path: '404',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
