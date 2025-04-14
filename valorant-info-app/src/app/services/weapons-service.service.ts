import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { WeaponSkin } from '../models/Weapon';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeaponsServiceService {

  constructor(private http: HttpClient) { }

  getWeapons(): Observable<any> {
    return this.http.get<any>("https://valorant-api.com/v1/weapons");
  }
}
