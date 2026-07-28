import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  path: string;
  image?: string;
  robots?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly baseUrl = 'https://www.h3logisticadecampo.com';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  updateSeo(data: SeoData): void {
    const canonical = `${this.baseUrl}${data.path}`;
    const image = data.image ?? `${this.baseUrl}/institutional/banner1.jpeg`;

    this.title.setTitle(data.title);

    this.meta.updateTag({
      name: 'description',
      content: data.description,
    });

    this.meta.updateTag({
      property: 'og:title',
      content: data.title,
    });

    this.meta.updateTag({
      property: 'og:description',
      content: data.description,
    });

    this.meta.updateTag({
      property: 'og:url',
      content: canonical,
    });

    this.meta.updateTag({
      property: 'og:image',
      content: image,
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: data.title,
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: data.description,
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: image,
    });

    this.meta.updateTag({
      name: 'robots',
      content: data.robots ?? 'index,follow',
    });

    this.updateCanonical(canonical);
  }

  private updateCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
