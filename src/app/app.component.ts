import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet  } from '@angular/router';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
    FooterComponent
  
  ],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'portfolio-page';
  constructor() {
  }

}


/*
  
    LandingPageComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioSectionComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent

import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component'
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { NavbarComponent } from './navbar/navbar.component';
*/