import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './components/content/content.component';
import { JobDescriptionComponent } from './components/job-description/job-description.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'job-description', component: JobDescriptionComponent},
  {path: 'company-details', component: CompanyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
