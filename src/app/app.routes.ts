import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: 'about', component:AboutComponent },
    {path: 'experience', component: ExperienceComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'education', component: EducationComponent}
];
