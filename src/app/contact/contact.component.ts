import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';





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
  mailTest = true;

  http = inject(HttpClient);

  constructor(private foBu: FormBuilder, private elementRef: ElementRef) {

    this.contactForm = this.foBu.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  post = {
    endPoint: 'https://dominik-tockloth.de/sendMail.php',
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
      // Formular ist gültig, hier können Sie die Sendelogik implementieren
      console.log('Formular ist gültig, sende Nachricht:', this.contactForm);
      this.http.post(this.post.endPoint, this.post.body(this.contactForm))
        .subscribe({
          next: (response) => {
            this.clearForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });

    } else {
      // Markieren Sie die Formularfelder, die nicht gültig sind
      Object.keys(this.contactForm.controls).forEach(field => {
        const control = this.contactForm.get(field);
        if (control?.invalid) {
          control.markAsTouched({ onlySelf: true });
        }
      });
    }
  }

  ngOnInit(): void {
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  clearForm() {
    this.isSubmitted = false;
    this.contactForm.reset();
  };

}

