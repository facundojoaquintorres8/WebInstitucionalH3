import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  
  products = [
    {
      name: 'Producto 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa molestie, sagittis leo euismod, cursus nibh. Sed ac placerat lectus. Sed urna ligula, elementum vel lorem quis, porttitor vehicula enim. Sed et nisi fringilla, vehicula ipsum non, tincidunt nulla. Suspendisse potenti. Curabitur lacinia molestie diam vitae blandit. Phasellus efficitur dui odio, ut porttitor odio imperdiet sed. Etiam fermentum nunc in leo scelerisque, ut lacinia augue pretium. Phasellus lectus nisi, tempor sed ornare sed, finibus nec turpis. Fusce ultricies in odio in semper.',
      image: '/products/product1.jpeg',
    },
    {
      name: 'Producto 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa molestie, sagittis leo euismod, cursus nibh. Sed ac placerat lectus. Sed urna ligula, elementum vel lorem quis, porttitor vehicula enim. Sed et nisi fringilla, vehicula ipsum non, tincidunt nulla. Suspendisse potenti. Curabitur lacinia molestie diam vitae blandit. Phasellus efficitur dui odio, ut porttitor odio imperdiet sed. Etiam fermentum nunc in leo scelerisque, ut lacinia augue pretium. Phasellus lectus nisi, tempor sed ornare sed, finibus nec turpis. Fusce ultricies in odio in semper.',
      image: '/products/product2.jpeg',
    },
    {
      name: 'Producto 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa molestie, sagittis leo euismod, cursus nibh. Sed ac placerat lectus. Sed urna ligula, elementum vel lorem quis, porttitor vehicula enim. Sed et nisi fringilla, vehicula ipsum non, tincidunt nulla. Suspendisse potenti. Curabitur lacinia molestie diam vitae blandit. Phasellus efficitur dui odio, ut porttitor odio imperdiet sed. Etiam fermentum nunc in leo scelerisque, ut lacinia augue pretium. Phasellus lectus nisi, tempor sed ornare sed, finibus nec turpis. Fusce ultricies in odio in semper.',
      image: '/products/product3.jpeg',
    },
    {
      name: 'Producto 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa molestie, sagittis leo euismod, cursus nibh. Sed ac placerat lectus. Sed urna ligula, elementum vel lorem quis, porttitor vehicula enim. Sed et nisi fringilla, vehicula ipsum non, tincidunt nulla. Suspendisse potenti. Curabitur lacinia molestie diam vitae blandit. Phasellus efficitur dui odio, ut porttitor odio imperdiet sed. Etiam fermentum nunc in leo scelerisque, ut lacinia augue pretium. Phasellus lectus nisi, tempor sed ornare sed, finibus nec turpis. Fusce ultricies in odio in semper.',
      image: '/products/product4.jpeg',
    },
    {
      name: 'Producto 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa molestie, sagittis leo euismod, cursus nibh. Sed ac placerat lectus. Sed urna ligula, elementum vel lorem quis, porttitor vehicula enim. Sed et nisi fringilla, vehicula ipsum non, tincidunt nulla. Suspendisse potenti. Curabitur lacinia molestie diam vitae blandit. Phasellus efficitur dui odio, ut porttitor odio imperdiet sed. Etiam fermentum nunc in leo scelerisque, ut lacinia augue pretium. Phasellus lectus nisi, tempor sed ornare sed, finibus nec turpis. Fusce ultricies in odio in semper.',
      image: '/products/product5.jpeg',
    },
    {
      name: 'Producto 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa molestie, sagittis leo euismod, cursus nibh. Sed ac placerat lectus. Sed urna ligula, elementum vel lorem quis, porttitor vehicula enim. Sed et nisi fringilla, vehicula ipsum non, tincidunt nulla. Suspendisse potenti. Curabitur lacinia molestie diam vitae blandit. Phasellus efficitur dui odio, ut porttitor odio imperdiet sed. Etiam fermentum nunc in leo scelerisque, ut lacinia augue pretium. Phasellus lectus nisi, tempor sed ornare sed, finibus nec turpis. Fusce ultricies in odio in semper.',
      image: '/products/product6.jpeg',
    },
    {
      name: 'Producto 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa molestie, sagittis leo euismod, cursus nibh. Sed ac placerat lectus. Sed urna ligula, elementum vel lorem quis, porttitor vehicula enim. Sed et nisi fringilla, vehicula ipsum non, tincidunt nulla. Suspendisse potenti. Curabitur lacinia molestie diam vitae blandit. Phasellus efficitur dui odio, ut porttitor odio imperdiet sed. Etiam fermentum nunc in leo scelerisque, ut lacinia augue pretium. Phasellus lectus nisi, tempor sed ornare sed, finibus nec turpis. Fusce ultricies in odio in semper.',
      image: '/products/product7.jpeg',
    },
    {
      name: 'Producto 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa molestie, sagittis leo euismod, cursus nibh. Sed ac placerat lectus. Sed urna ligula, elementum vel lorem quis, porttitor vehicula enim. Sed et nisi fringilla, vehicula ipsum non, tincidunt nulla. Suspendisse potenti. Curabitur lacinia molestie diam vitae blandit. Phasellus efficitur dui odio, ut porttitor odio imperdiet sed. Etiam fermentum nunc in leo scelerisque, ut lacinia augue pretium. Phasellus lectus nisi, tempor sed ornare sed, finibus nec turpis. Fusce ultricies in odio in semper.',
      image: '/products/product8.jpeg',
    }
  ];

  public whatsappLink(productName: string): string {
    const phone = '5493382419754';
    const message = `Hola, quiero más información sobre el producto: ${productName}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }
}
