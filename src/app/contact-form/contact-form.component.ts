import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {emailPatternValidator} from '../shared/validators/emailPattern.validators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  //Form validators for each input
  contactForm = this.formBuilder.group({
    userFirstname: ['', [Validators.required, Validators.minLength(2)]],
    userLastname: ['', [Validators.required, Validators.minLength(2)]],
    userEmail: ['', [Validators.required, emailPatternValidator]],
    userMessage: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
  });
  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    alert('Votre message a bien été envoyé');
    this.contactForm.reset();
  }
}
