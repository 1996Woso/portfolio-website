import { Injectable } from '@angular/core';
import { Project } from '../_interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: {[key: string]: Partial<Project>} = {
    sapsApp: {
      url: 'saps-app.png',
      alt: 'SAPS app logo',
      caption: 'SAPS',
      gitHubLink: 'https://github.com/1996Woso/SAPS_App'
    },
    datingApp: {
      url: 'dating-app.png',
      alt: 'Dating app logo',
      caption: 'Dating App',
      gitHubLink: 'https://github.com/1996Woso/DatingApp'
    }
  }

  getProjects(): Partial<Project>[] {
    return Object.values(this.projects);
  }
}
