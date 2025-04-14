import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AgentResponse } from '../models/Agent';
import { Observable } from 'rxjs';
import { Map } from '../models/Map';

@Injectable({
  providedIn: 'root'
})
export class MapsServiceService {

  constructor(private http: HttpClient) {}

  getMaps(): Observable<Map> {
    return this.http.get<Map>("https://valorant-api.com/v1/maps");
  }
}
