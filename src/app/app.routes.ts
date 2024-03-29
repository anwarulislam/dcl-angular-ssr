import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DedicatedTeamsComponent } from './services/dedicated-teams/dedicated-teams.component';
import { SoftwareOutsourcingComponent } from './services/software-outsourcing/software-outsourcing.component';
import { StaffAugmentationComponent } from './services/staff-augmentation/staff-augmentation.component';
import { IndexComponent } from './technologies/index/index.component';
import { SolutionComponent } from './solutions/solution/solution.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { ContactComponent } from './contact/contact.component';
import { ScheduleComponent } from './schedule-call/schedule/schedule.component';
import { BasicDetailsComponent } from './schedule-call/basic-details/basic-details.component';
import { BudgetComponent } from './schedule-call/budget/budget.component';
import { ContactInformationComponent } from './schedule-call/contact-information/contact-information.component';
import { DurationComponent } from './schedule-call/duration/duration.component';
import { ItProfessionalsComponent } from './schedule-call/it-professionals/it-professionals.component';
import { StartDateComponent } from './schedule-call/start-date/start-date.component';
import { TechnologiesComponent } from './schedule-call/technologies/technologies.component';
import { BlogDetailsComponent } from './blog-details/blog-details/blog-details.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ThankYouComponent } from './schedule-call/thank-you/thank-you.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services/dedicated-teams', component: DedicatedTeamsComponent },
  {
    path: 'services/software-outsourcing',
    component: SoftwareOutsourcingComponent,
  },
  {
    path: 'services/staff-augmentation',
    component: StaffAugmentationComponent,
  },
  { path: 'technologies/:type', component: IndexComponent },
  { path: 'solutions/:type', component: SolutionComponent },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'case-study/:type', component: CaseDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogsComponent },
  { path: 'blog/:type', component: BlogDetailsComponent },
  { path: 'schedule-call/basic-details', component: BasicDetailsComponent },
  { path: 'schedule-call/budget', component: BudgetComponent },
  {
    path: 'schedule-call/contact-information',
    component: ContactInformationComponent,
  },
  { path: 'schedule-call/duration', component: DurationComponent },
  {
    path: 'schedule-call/it-professionals',
    component: ItProfessionalsComponent,
  },
  { path: 'schedule-call/schedule', component: ScheduleComponent },
  { path: 'schedule-call/start-date', component: StartDateComponent },
  { path: 'schedule-call/technologies', component: TechnologiesComponent },
  { path: 'thank-you', component: ThankYouComponent },
];
