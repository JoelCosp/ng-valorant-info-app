import { Component } from '@angular/core';
import { WeaponsListComponent } from '../../components/weapons-list/weapons-list.component';

@Component({
  selector: 'app-weapons',
  imports: [WeaponsListComponent],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.css'
})
export class WeaponsComponent {

}
