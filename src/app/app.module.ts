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
import { ValidationErrorMessageComponent } from './validation-error-message/validation-error-message.component';
import { HighlightDirective } from './highlight.directive';
import { CurrencyConvertPipe } from './currency-convert.pipe';

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
    FeedBackComponent,
    ValidationErrorMessageComponent,
    HighlightDirective,
    CurrencyConvertPipe
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
