import { Component, Input } from '@angular/core';
import { MapsServiceService } from '../../services/maps-service.service';
import { MapsCardsComponent } from '../cards/maps-cards/maps-cards.component';
import { CommonModule } from '@angular/common';
import { Map } from '../../models/Map';

@Component({
  selector: 'app-maps-list',
  imports: [CommonModule, MapsCardsComponent],
  templateUrl: './maps-list.component.html',
  styleUrl: './maps-list.component.css'
})
export class MapsListComponent {
  @Input() sectionTitle!: string;

  mapResponse: any;
  maps!: Map[]; 
  constructor(private mapsService: MapsServiceService) {
    this.maps = [];
  }

  ngOnInit(): void {
    this.mapsService.getMaps().subscribe((response) => {
      this.mapResponse = response;
      this.maps = this.mapResponse.data;
      console.log(this.maps);
    });
  }
}
