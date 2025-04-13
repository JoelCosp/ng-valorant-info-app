import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { WeaponSkin } from '../models/Weapon';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeaponsServiceService {

  constructor(private http: HttpClient) { }

  getAgents(): Observable<WeaponSkin> {
    return this.http.get<WeaponSkin>("https://valorant-api.com/v1/agents");
  }
}
