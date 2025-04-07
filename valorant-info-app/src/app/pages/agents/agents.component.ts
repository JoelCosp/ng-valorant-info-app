import { Component } from '@angular/core';

// Components
import { AgentsMapsListComponent } from '../../components/agents-maps-list/agents-maps-list.component';

@Component({
  selector: 'app-agents',
  imports: [AgentsMapsListComponent],
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.css'
})
export class AgentsComponent{

}
