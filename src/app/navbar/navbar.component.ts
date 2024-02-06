import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';





@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  animations: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})



export class NavbarComponent {
  constructor() { }


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

    if (this.isTranslatedGerman) {
      this.germanFlag = this.britishFlag;
    } else {
      this.germanFlag = 'assets/img/flag-ger.png';
      this.britishFlag = 'assets/img/flag-england.png';
    }
  }
}














