import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterComponent, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private router: Router) { }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  goToImprint(): void {
    this.router.navigate(['/imprint']);
    this.scrollToTop();
  }
}
