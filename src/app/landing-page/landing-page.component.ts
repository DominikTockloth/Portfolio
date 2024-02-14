import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { TranslateModule } from '@ngx-translate/core';





@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [AboutMeComponent , TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', './responsiv-page.scss']
})

export class LandingPageComponent {
  constructor() { }
}
