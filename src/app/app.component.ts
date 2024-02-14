import { Component} from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

import AOS from 'aos';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
    FooterComponent,
    TranslateModule

  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'portfolio-page';

  constructor(public translate:TranslateService) { }

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      AOS.init();
    }

  }
}

