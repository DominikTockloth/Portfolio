import { Component } from '@angular/core';
import { PortfolioSectionComponent } from '../portfolio-section/portfolio-section.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [PortfolioSectionComponent , TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
constructor(){}
}
