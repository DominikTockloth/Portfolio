import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component'
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        RouterOutlet,
        LandingPageComponent,
        AboutMeComponent,
        SkillsComponent,
        PortfolioSectionComponent,
        ContactComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
    ],

    bootstrap: [AppComponent],
})
export class AppModule {

}

