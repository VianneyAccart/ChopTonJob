import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailPatternValidator} from '../shared/validators/emailPattern.validators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  // Form validators for each input
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      userFirstname: ['', [Validators.required, Validators.minLength(2)]],
      userLastname: ['', [Validators.required, Validators.minLength(2)]],
      userEmail: ['', [Validators.required, emailPatternValidator]],
      userMessage: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  // What happens when form is submitted
  onSubmit(): void {
    alert('Votre message a bien été envoyé');
    this.contactForm.reset();
  }
}
