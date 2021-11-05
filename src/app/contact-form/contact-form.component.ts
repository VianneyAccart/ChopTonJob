import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  //Form validators for each input
  contactForm = this.formBuilder.group({
    userFirstname: ['', Validators.required],
    userLastname: ['', Validators.required],
    userEmail: ['', [Validators.required, Validators.email]],
    userMessage: ['', Validators.required],
  });
  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    alert('Votre message a bien été envoyé');
  }
}
