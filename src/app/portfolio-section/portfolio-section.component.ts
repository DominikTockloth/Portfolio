import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {
constructor(){}
}
