import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-cards',
  imports: [],
  templateUrl: './home-cards.component.html',
  styleUrl: './home-cards.component.css'
})
export class HomeCardsComponent {
  @Input() sectionData!: { name: string; img: string };
}
