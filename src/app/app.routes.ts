import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
     {path: '', component:HomeComponent },
    {path: 'about', component:AboutComponent },
    {path: 'experience', component: ExperienceComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'education', component: EducationComponent},
    {path: 'projects', component: ProjectsComponent}
];
