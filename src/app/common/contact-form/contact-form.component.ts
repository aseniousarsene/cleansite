import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input() formDark!: boolean;
  public form!: NgForm;
  public name!: string;
  public email!: string;
  public message!: string;
  public mouseOverSubmit!: boolean;
  public submitTrigger!: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  submit(contactForm: NgForm) {
    this.submitTrigger = true;
  }
}
