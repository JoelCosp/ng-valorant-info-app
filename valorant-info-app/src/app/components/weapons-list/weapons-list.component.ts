import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponsServiceService } from '../../services/weapons-service.service';
import { WeaponSkin } from '../../models/Weapon';
@Component({
  selector: 'app-weapons-list',
  imports: [CommonModule],
  templateUrl: './weapons-list.component.html',
  styleUrl: './weapons-list.component.css'
})
export class WeaponsListComponent implements OnInit{
  @Input() sectionTitle!: string;

  weapons!: WeaponSkin[];

  constructor(private weaponsService: WeaponsServiceService) {
    this.weapons = [];
  }

  ngOnInit(): void {
      this.weaponsService.getAgents().subscribe((data) => {
        this.weapons = data;
      })
  }
}
