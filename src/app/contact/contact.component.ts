import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NgIf, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  contactForm: FormGroup;
  isSubmitted = false;




  constructor(private foBu: FormBuilder) {
    this.contactForm = this.foBu.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });


  }

  clearForm() {
    this.isSubmitted = false;
    this.contactForm.reset();
  };


  onSubmit() {
    if (this.contactForm.valid) {
      // Formular ist gültig, hier können Sie die Sendelogik implementieren
      console.log('Formular ist gültig, sende Nachricht:', this.contactForm);
      this.clearForm();
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