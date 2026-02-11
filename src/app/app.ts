import { Component, OnInit } from '@angular/core';
import { Layout } from './layout/layout';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SeoService } from './seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  imports: [Layout]
})
export class App implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly seoService: SeoService
  ) { }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        let route = this.activatedRoute;

        while (route.firstChild) {
          route = route.firstChild;
        }

        route.data.subscribe((data) => {
          if (data['title'] && data['description']) {
            this.seoService.updateSeo(
              data['title'],
              data['description']
            );
          }
        });
      });
  }
}
