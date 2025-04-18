import { Component, OnInit } from '@angular/core';
import { RedButtonComponent } from '../red-button/red-button.component';
import { RouterLink, NavigationEnd, Router } from '@angular/router';
import {CommonModule} from "@angular/common"
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-nav',
  imports: [RedButtonComponent, RouterLink, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  navActive!: boolean;

  constructor(private router: Router) {
    this.navActive = false;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd) // solo cuando termina la navegación
      )
      .subscribe((event: NavigationEnd) => {
        console.log('Cambié de página a:', event.urlAfterRedirects);
        this.toggleNav();
      });
  }

  toggleNav(): void {
    this.navActive = !this.navActive;
  }

}
