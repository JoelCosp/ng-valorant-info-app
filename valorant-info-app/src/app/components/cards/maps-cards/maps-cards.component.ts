import { Component, Input } from '@angular/core';
import { Map } from '../../../models/Map';

@Component({
  selector: 'app-maps-cards',
  imports: [],
  templateUrl: './maps-cards.component.html',
  styleUrl: './maps-cards.component.css'
})
export class MapsCardsComponent {
  @Input() map!: Map;
}
