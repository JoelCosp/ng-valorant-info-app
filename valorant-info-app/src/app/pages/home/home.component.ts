import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedButtonComponent } from '../../components/red-button/red-button.component';
import { HomeCardsComponent } from '../../components/cards/home-cards/home-cards.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RedButtonComponent, HomeCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mainSections!: { name: string; img: string }[];

  constructor() {
    this.mainSections = [
      {
        name: "MAPS",
        img: "/assets/img/maps.webp"
      },
      {
        name: "AGENTS",
        img: "/assets/img/agents.webp"
      },
      {
        name: "WEAPONS",
        img: "/assets/img/weapons.jpg"
      }
    ]
  }
}
