import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactForm = this.formBuilder.group({
    userFirstname: ['Prénom'],
    userLastname: ['Nom'],
    userEmail: ['Email'],
    userMessage: ['Message...'],
  });
  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.contactForm.value);
  }

  ngOnInit(): void {}
}
