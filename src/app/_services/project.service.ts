import { Injectable } from '@angular/core';
import { Project } from '../_interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: { [key: string]: Partial<Project> } = {
    sapsApp: {
      url: 'saps-app.png',
      alt: 'SAPS app logo',
      caption: 'Police Station Case Management System',
      gitHubLink: 'https://github.com/1996Woso/SAPS_App',
      liveLink: 'https://eviwe-saps.runasp.net/',
      description: 'A web-based system for managing suspect records, criminal cases, and case assignments in a police station. It features role-based access, automated case assignment, and case tracking from suspect capture to closure. Built with ASP.NET Core, MVC, Blazor, and MS SQL Server, it enhances efficiency and accountability in law enforcement.'
    },
    datingApp: {
      url: 'dating-app.png',
      alt: 'Dating app logo',
      caption: 'Dating Application',
      gitHubLink: 'https://github.com/1996Woso/DatingApp',
      liveLink: 'https://eviwekhohlombe-dating-app.netlify.app/',
      description: 'A web-based dating platform that enables users to create profiles, discover potential matches, communicate securely, and access personalized features through authenticated user accounts. Built with ASP.NET Core, Angular, and MS SQL Server, it enhances efficiency and accountability in law enforcement.'
    },
    portfolioApp: {
      url: 'portfolio-app.png',
      alt: 'Portfolio app logo',
      caption: 'Portfolio Website',
      gitHubLink: 'https://github.com/1996Woso/portfolio-website',
    },
  };

  getProjects(): Partial<Project>[] {
    return Object.values(this.projects);
  }
}
