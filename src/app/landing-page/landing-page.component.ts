import { Component} from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [AboutMeComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent {
constructor(){}
}
