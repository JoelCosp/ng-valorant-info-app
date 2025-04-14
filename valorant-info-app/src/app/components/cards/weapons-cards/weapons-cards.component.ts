import { Component, Input } from '@angular/core';
import { WeaponSkin } from '../../../models/Weapon';

@Component({
  selector: 'app-weapons-cards',
  imports: [],
  templateUrl: './weapons-cards.component.html',
  styleUrl: './weapons-cards.component.css'
})
export class WeaponsCardsComponent {
  @Input() weapon!: WeaponSkin;
}
