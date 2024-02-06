import { Component , HostListener, ElementRef, Renderer2  } from '@angular/core';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})

export class  AboutMeComponent {
  animatedContent = false;
  animatedImg = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + window.innerHeight;

    if (scrollPosition > componentPosition && !this.animatedContent) {
      this.renderer.addClass(this.el.nativeElement.querySelector('.about-content'), 'show');
      this.renderer.removeClass(this.el.nativeElement.querySelector('.about-content'), 'animated');
      this.animatedContent = true;
    }

    if (scrollPosition > componentPosition && !this.animatedImg) {
      this.renderer.addClass(this.el.nativeElement.querySelector('.about-img'), 'show');
      this.renderer.removeClass(this.el.nativeElement.querySelector('.about-img'), 'animated');
      this.animatedImg = true;
    }
  }
}










