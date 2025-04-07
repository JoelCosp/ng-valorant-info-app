import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Models
import { AgentResponse } from '../../models/Agent';
import { Agent } from '../../models/Agent';

// Services
import { AgentsServiceService } from '../../services/agents-service.service';

@Component({
  selector: 'app-agents-maps-list',
  imports: [CommonModule],
  templateUrl: './agents-maps-list.component.html',
  styleUrl: './agents-maps-list.component.css'
})
export class AgentsMapsListComponent implements OnInit{

  @Input() sectionTitle!: string;

  agentResponse: AgentResponse | null = null;
  data: Agent[]; 
  constructor(private agentsService: AgentsServiceService) {
    this.data = [];
  }

  ngOnInit(): void {
    this.agentsService.getAgents().subscribe((response) => {
      this.agentResponse = response;
      this.data = this.agentResponse.data;
      console.log(this.data);
    });
  }
}
