import { ɵBrowserAnimationBuilder } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ToastrModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  constructor(private fb: FormBuilder, private toastr: ToastrService) {}
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      company: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('form value:', this.contactForm);
    if (this.contactForm.status == 'INVALID') {
      console.log('invlid');
      this.toastr.error('Please provide all the details');
    } else {
      console.log(this.contactForm.value);
    }
  }
}
