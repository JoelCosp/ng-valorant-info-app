import { Component } from '@angular/core';
import { RedButtonComponent } from '../red-button/red-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RedButtonComponent, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
