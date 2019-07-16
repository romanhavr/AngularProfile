import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainBarComponent } from './main-bar/main-bar.component';
import { SummaryComponent } from './summary/summary.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { TrainingComponent } from './training/training.component';
import { TechnologyProfileComponent } from './technology-profile/technology-profile.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FeedBackComponent } from './feed-back/feed-back.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainBarComponent,
    SummaryComponent,
    WorkExperienceComponent,
    EducationComponent,
    TrainingComponent,
    TechnologyProfileComponent,
    ContactsComponent,
    FeedBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
