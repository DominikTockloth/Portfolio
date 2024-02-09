import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes } from '@angular/router';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component'
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';


const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'imprint', component: ImprintComponent },
  ];

  
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LandingPageComponent,
        AboutMeComponent,
        SkillsComponent,
        PortfolioSectionComponent,
        ContactComponent,
        FooterComponent,
        ImprintComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
    ],

    bootstrap: [AppComponent],
})
export class AppModule {
  
}

