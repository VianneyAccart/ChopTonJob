import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactForm = this.formBuilder.group({
    userFirstname: ['', Validators.required],
    userLastname: ['', Validators.required],
    userEmail: ['', [Validators.required, Validators.email]],
    userMessage: ['', Validators.required],
  });
  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.contactForm.value);
  }

  ngOnInit(): void {}
}
