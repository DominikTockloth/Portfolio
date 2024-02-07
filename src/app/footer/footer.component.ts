import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
constructor(private router:Router){}


goToImprint(): void {
  this.router.navigate(['/imprint']); // Hier '/navbar' durch den tatsächlichen Pfad zur Navbar-Seite ersetzen
}
}
