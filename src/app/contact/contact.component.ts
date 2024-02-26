import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NgIf, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  contactForm: FormGroup;
  isSubmitted = false;
  mailSent = false;


  http = inject(HttpClient);

  constructor(private foBu: FormBuilder, private elementRef: ElementRef) {

    this.contactForm = this.foBu.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      isChecked: [false]
    });
  }

  post = {
    endPoint: 'https://dominik-tockloth.de/send-mail/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitted) {
      this.http.post(this.post.endPoint, this.post.body(this.contactForm.value))
        .subscribe({
          next: (response) => {
            this.clearForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => this.showMessage(),
        });
    } else {
      Object.keys(this.contactForm.controls).forEach(field => {
        const control = this.contactForm.get(field);
        if (control?.invalid) {
          control.markAsTouched({ onlySelf: true });
        }
      });
    }
  }

  showMessage() {
    this.mailSent = true;
    const duration = 3500;
    const timer$ = timer(duration);
    timer$.pipe(take(1)).subscribe(() => {
      this.mailSent = false;
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  clearForm() {
    this.isSubmitted = false;
    this.mailSent = true;
    this.contactForm.reset();
  };
}





