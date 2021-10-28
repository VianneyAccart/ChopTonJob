import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { TeamPageComponent } from './team-page/team-page.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'equipe',
    component: TeamPageComponent
  },
  {
    path: '',
    component: ResultPageComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
