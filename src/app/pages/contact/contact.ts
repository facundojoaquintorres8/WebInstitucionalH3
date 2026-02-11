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

  sending = false;

  model = {
    name: '',
    email: '',
    message: '',
  };

  async submit() {
    if (this.sending) return;

    this.sending = true;

    const endpoint = 'https://formspree.io/f/mvzbgdjo';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.model.name,
          email: this.model.email,
          message: this.model.message,
        }),
      });

      if (res.ok) {
        alert('Mensaje enviado correctamente');
        this.model = {
          name: '',
          email: '',
          message: '',
        };
      } else {
        alert('Error al enviar el mensaje. Intentá nuevamente.');
      }

    } catch {
      alert('Error de conexión. Revisá tu internet.');
    } finally {
      this.sending = false;
    }
  }
}
