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
    '/institutional/marca1.jpeg',
    '/institutional/marca2.jpeg',
    '/institutional/marca3.jpeg',
  ];

}
