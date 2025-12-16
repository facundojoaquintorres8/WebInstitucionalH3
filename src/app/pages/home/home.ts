import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { About } from '../about/about';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterLink,
    About
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {

  images = [
    '/institutional/banner1.jpeg',
    '/institutional/banner2.jpeg',
    '/institutional/banner1.jpeg',
    '/institutional/banner2.jpeg'
  ];

  images1 = [
    '/institutional/banner1.jpeg',
    '/institutional/banner2.jpeg'
  ];

  images2 = [
    '/institutional/marca1.jpeg',
    '/institutional/marca2.jpeg',
    '/institutional/marca3.jpeg',
  ];

  images3 = [
    '/institutional/campo1.jpeg',
    '/institutional/campo2.jpeg',
    '/institutional/campo3.jpeg',
  ];

}
