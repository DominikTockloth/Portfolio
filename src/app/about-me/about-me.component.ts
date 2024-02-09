import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';



@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [SkillsComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
 
})

export class AboutMeComponent {


  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = this.elementRef.nativeElement;
    if (this.isElementInViewport(element)) {
      this.animateElement(element);
    }
  }

  animateElement(element: HTMLElement) {
    this.renderer.addClass(element, 'active');
  }

  isElementInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}










