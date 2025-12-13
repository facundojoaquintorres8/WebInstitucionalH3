import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  model = {
    name: '',
    email: '',
    message: '',
  };

  submit() {
    console.log('Formulario enviado:', this.model);
    alert('Gracias por contactarnos. Te responderemos a la brevedad.');
    this.model = { name: '', email: '', message: '' };
  }
}
