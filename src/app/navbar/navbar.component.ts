import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { slideInRightOnEnterAnimation, slideOutRightOnLeaveAnimation } from 'angular-animations';
import { TranslateService } from '@ngx-translate/core';





@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  animations: [
    slideInRightOnEnterAnimation({ duration: 300 }),
    slideOutRightOnLeaveAnimation({ duration: 500 })
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})



export class NavbarComponent {
  constructor(public translate: TranslateService) { }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  isResponsiveMenuOpen: boolean = false;
  burgerMenu: any = 'assets/img/burger-menu.svg';
  closeMenu: any = 'assets/img/close-sign.png';
  germanFlag: any = 'assets/img/flag-ger.png';
  britishFlag: any = 'assets/img/flag-england.png';
  isTranslatedGerman: boolean = false;


  toggleResponsiveMenu() {
    this.isResponsiveMenuOpen = !this.isResponsiveMenuOpen;
    if (this.isResponsiveMenuOpen) {
      this.burgerMenu = this.closeMenu;
    } else {
      this.burgerMenu = 'assets/img/burger-menu.svg';
      this.closeMenu = 'assets/img/close-sign.png';
    }
  }


  toggleLanguage() {
    this.isTranslatedGerman = !this.isTranslatedGerman;

    this.translate.setDefaultLang(this.isTranslatedGerman ? 'de' : 'en');
    this.translate.use(this.isTranslatedGerman ? 'de' : 'en');

    if (this.isTranslatedGerman) {
      this.germanFlag = this.britishFlag;
    } else {
      this.germanFlag = 'assets/img/flag-ger.png';
      this.britishFlag = 'assets/img/flag-england.png';
    }
  }
}














