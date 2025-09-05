import { Injectable } from '@angular/core';
import { Experience } from '../_interfaces/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private experience: { [key: string]: Experience } = {
    coj: {
      title: 'Software Developer & Data Analyst Intern',
      company: 'City of Johannesburg Metropolitan Municipality',
      location: 'Johannesburg, Gauteng',
      period: 'Jan 2024 - June 2025',
      responsibilities: [
        'Plan, develop, test, deploy, and maintain web applications.',
        'Write SQL statements and stored procedures.',
        'Communicate with clients to gather application requirements.'
      ],
      technologies: [
        '.NET ',
        'C# ',
        'ASP.NET Core',
        'ASP.NET Core MVC',
        'JavaScript',
        'MS SQL Server',
        'IIS',
      ],
    },
     mindworx: {
      title: 'Systems Development trainee',
      company: 'Mindworx Consulting and Academy',
      location: 'Cape Town, Western Cape',
      period: 'May 2023 - March 2024',
      responsibilities: 'During my learnership, I developed skills in software design, database management, software development, and testing, gaining a solid foundation in creating and delivering reliable applications.',
      technologies: [
        'C# ',
        'VB.NET',
        'Java',
        'HTML',
        'CSS',
        'JavaScript',
        'MS SQL Serve'
      ],
    },
  };

  getExperience(): Experience[] {
    return Object.values(this.experience);
  }
}
