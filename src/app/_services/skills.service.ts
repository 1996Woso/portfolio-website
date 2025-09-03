import { Injectable } from '@angular/core';
import { Image } from '../_interfaces/image';
@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private programmingLanguages: { [key: string]: Image } = {
    cSharp: {
      url: 'CSharp.png',
      alt: 'C# logo',
      caption: 'C#',
    },
    javaScript: {
      url: 'javascript.png',
      alt: 'JS logo',
      caption: 'JavaScript',
    },
    typeScript: {
      url: 'typescript.png',
      alt: 'TS logo',
      caption: 'TypeScript',
    },
  };

  private databases: { [key: string]: Image } = {
    sqlServer: {
      url: 'Microsoft SQL Server.png',
      alt: 'SQL Server',
      caption: 'SQL Server',
    },
  };

  private frameworks: { [key: string]: Image } = {
    net: {
      url: 'NET.png',
      alt: '.Net logo',
      caption: '.NET',
    },
    netCore: {
      url: 'NET core.png',
      alt: '.Net Core logo',
      caption: '.NET Core',
    },
    aspNetCore: {
      url: 'ASP.NET Core.png',
      alt: 'ASP.Net Core logo',
      caption: 'ASP.NET Core',
    },
    mvc: {
      url: 'MVC.png',
      alt: 'MVC logo',
      caption: 'MVC',
    },
    blazor: {
      url: 'Blazor.png',
      alt: 'Blazor logo',
      caption: 'Blazor',
    },
    angular: {
      url: 'Angular.png',
      alt: 'Angular logo',
      caption: 'Angular',
    },
  };

  private toolsAndTechnologies: { [key: string]: Image } = {
    html: {
      url: 'HTML5.png',
      alt: 'HTML5 logo',
      caption: 'HTML5',
    },
    css: {
      url: 'CSS3.png',
      alt: 'CSS3 logo',
      caption: 'CSS3',
    },
    bootstrap: {
      url: 'Bootstrap.png',
      alt: 'Bootstrap logo',
      caption: 'Bootstrap',
    },
    git: {
      url: 'Git.png',
      alt: 'Git logo',
      caption: 'Git',
    },
    gitHub: {
      url: 'GitHub.png',
      alt: 'GitHub logo',
      caption: 'GitHub',
    },
  };
  getDatabases(): Image[] {
    return Object.values(this.databases);
  }

  getProgrammingLanguages(): Image[] {
    return Object.values(this.programmingLanguages);
  }

  getFrameworks(): Image[] {
    return Object.values(this.frameworks);
  }

  getToolsAndTechnologies(): Image[] {
    return Object.values(this.toolsAndTechnologies);
  }
}
