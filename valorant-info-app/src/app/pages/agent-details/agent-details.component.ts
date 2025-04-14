import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentDetailsSectionComponent } from '../../components/agent-details-section/agent-details-section.component';
import { AgentsServiceService } from '../../services/agents-service.service';
import { Agent } from '../../models/Agent';

@Component({
  selector: 'app-agent-details',
  imports: [AgentDetailsSectionComponent],
  templateUrl: './agent-details.component.html',
  styleUrl: './agent-details.component.css'
})
export class AgentDetailsComponent implements OnInit {
  agentId!: string;

  agentResponse!: any;
  data!: Agent;

  constructor(private route: ActivatedRoute, private agentsService: AgentsServiceService) {
    
  }
  
  ngOnInit() {
    const paramValue = this.route.snapshot.paramMap.get('id');
    this.agentId = paramValue ?? '';

    

    this.agentsService.getAgentById(this.agentId).subscribe((response) => {
      this.agentResponse = response;
      this.data = this.agentResponse.data;
      
      console.log("AGENT_BY_ID" + JSON.stringify(this.data));
    })
  }
}
