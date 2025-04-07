import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-cards',
  imports: [RouterLink],
  templateUrl: './home-cards.component.html',
  styleUrl: './home-cards.component.css'
})
export class HomeCardsComponent {
  @Input() sectionData!: { name: string; img: string, urlRoute: string };
}
