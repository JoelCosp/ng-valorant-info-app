import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AgentResponse } from '../models/Agent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentsServiceService{

  constructor(private http: HttpClient) {}

  getAgents(): Observable<AgentResponse> {
    return this.http.get<AgentResponse>("https://valorant-api.com/v1/agents");
  }
}
