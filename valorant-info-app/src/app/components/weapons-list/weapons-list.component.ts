import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponsServiceService } from '../../services/weapons-service.service';
import { WeaponSkin } from '../../models/Weapon';
import { WeaponsCardsComponent } from '../cards/weapons-cards/weapons-cards.component';
@Component({
  selector: 'app-weapons-list',
  imports: [CommonModule, WeaponsCardsComponent],
  templateUrl: './weapons-list.component.html',
  styleUrl: './weapons-list.component.css'
})
export class WeaponsListComponent implements OnInit{
  @Input() sectionTitle!: string;

  weaponResponse: any;
  weapons!: WeaponSkin[];

  constructor(private weaponsService: WeaponsServiceService) {
    this.weapons = [];
  }

  ngOnInit(): void {
      this.weaponsService.getWeapons().subscribe((data) => {
        this.weaponResponse = data;
        this.weapons = this.weaponResponse.data;
        console.log("WEAPONS" + JSON.stringify(this.weapons[0]));
      })
  }
}
