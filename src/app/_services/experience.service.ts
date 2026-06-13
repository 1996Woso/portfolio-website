import { Injectable } from '@angular/core';
import { Experience } from '../_interfaces/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private experience: { [key: string]: Experience } = {
    eskom: {
      title: 'Graduate in Training: Data Science',
      company: 'Eskom Holdings SOC Ltd',
      location: 'Johannesburg, Gauteng',
      period: 'March 2024 - Present',
      responsibilities: [
        'Currently participating in Power BI and Python training while building practical exposure to data science applications within the Front Office environment.',
        'Developing knowledge in key business and energy-sector learning areas, including aggregated resources, distributed energy resources, sales, price and revenue forecasting, NERSA, and economic regulation, while strengthening analytical and reporting skills in a professional setting.'
      ],
      technologies: [
        'Python',
        'MS SQL Server',
        'Power BI',
      ],
    },
    coj: {
      title: 'Software Developer & Data Analyst Intern',
      company: 'City of Johannesburg Metropolitan Municipality',
      location: 'Johannesburg, Gauteng',
      period: 'Jan 2024 - June 2025',
      responsibilities: [
        'Designed, developed, tested, deployed, and maintained web applications using ASP.NET Core MVC and SQL Server in an IIS-hosted environment.',
        'Wrote SQL queries and stored procedures to support application functionality and data management, and collaborated with stakeholders to gather requirements and translate business needs into practical technical solutions.',
        'Contributed across the full development lifecycle, supporting reliable system performance and user-focused application improvements.'
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
      responsibilities: [
        'Completed structured training in software design, database management, software development, and testing, building a solid foundation in creating, supporting, and delivering reliable applications.',
        'Strengthened practical understanding of development workflows, problem-solving, and core engineering principles used in professional software environments.'
      ],
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
