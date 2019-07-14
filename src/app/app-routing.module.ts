import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { TrainingComponent } from './training/training.component';
import { TechnologyProfileComponent } from './technology-profile/technology-profile.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FeedBackComponent } from './feed-back/feed-back.component';

const routes: Routes = [
  { path: '', component: SummaryComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'work experience', component: WorkExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'technology profile', component: TechnologyProfileComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'feedbacks', component: FeedBackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
