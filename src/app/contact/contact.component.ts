import { CommonModule, NgIf } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';





@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NgIf, ReactiveFormsModule , TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  contactForm: FormGroup;
  isSubmitted = false;


  constructor(private foBu: FormBuilder, private elementRef: ElementRef ) {

    this.contactForm = this.foBu.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
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


  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitted = true;
      // Formular ist gültig, hier können Sie die Sendelogik implementieren
      console.log('Formular ist gültig, sende Nachricht:', this.contactForm);
      setTimeout(() => {
        this.clearForm();
      }, 3000)
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
}

/*
  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }
}
*/