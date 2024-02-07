
import {  Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';



export const routes: Routes = [
    {path:'', component: LandingPageComponent},
    {path:'about-me', component: AboutMeComponent},
    {path:'contact', component:ContactComponent },
    {path:'skills', component:SkillsComponent },
    {path:'portfolio-section', component:PortfolioSectionComponent },
    {path:'imprint', component: ImprintComponent},
];




