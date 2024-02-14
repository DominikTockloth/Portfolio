import { Component} from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { TranslateModule } from '@ngx-translate/core';






@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [ContactComponent , TranslateModule],
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss', './responsive-portfolio.scss']
})

export class PortfolioSectionComponent  {
constructor(){}



}
