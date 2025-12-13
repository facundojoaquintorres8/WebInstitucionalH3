import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';
import { WhatsappButton } from '../shared/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    Navbar,
    WhatsappButton,
    Footer,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  standalone: true
})
export class Layout {

}
