import { Component } from '@angular/core';
import { PortfolioSectionComponent } from '../portfolio-section/portfolio-section.component';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [PortfolioSectionComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
constructor(){}
}
