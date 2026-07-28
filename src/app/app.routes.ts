import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    data: {
      seo: {
        title: 'H3 Logística de Campo | Coadyuvantes agrícolas',
        description:
          'H3 Logística de Campo ofrece coadyuvantes y soluciones para fumigaciones y aplicaciones agrícolas más eficientes.',
        path: '/',
      },
    },
  },
  {
    path: 'about',
    component: About,
    data: {
      seo: {
        title: 'Nosotros | H3 Logística de Campo',
        description:
          'H3 Logística de Campo es una empresa dedicada al desarrollo de coadyuvantes y agroquímicos para fumigaciones y aplicaciones agrícolas.',
        path: '/about',
      },
    },
  },
  {
    path: 'products',
    component: Products,
    data: {
      seo: {
        title: 'Productos para fumigación | H3 Logística de Campo',
        description:
          'Conocé los coadyuvantes y agroquímicos de H3 Logística de Campo para optimizar fumigaciones y aplicaciones agrícolas.',
        path: '/products',
      },
    },
  },
  {
    path: 'contact',
    component: Contact,
    data: {
      seo: {
        title: 'Contacto | H3 Logística de Campo',
        description:
          'Contactá a H3 Logística de Campo para asesoramiento en fumigaciones, agroquímicos y coadyuvantes agrícolas.',
        path: '/contact',
      },
    },
  },
];
