import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.css',
})
export class WhatsappButton {
  phone = '5493424064362';
  message = 'Hola, quiero más información sobre sus productos';

  get whatsappUrl(): string {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(
      this.message
    )}`;
  }
}
