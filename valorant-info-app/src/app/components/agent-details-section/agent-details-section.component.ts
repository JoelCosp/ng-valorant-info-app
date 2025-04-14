import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-agent-details-section',
  imports: [],
  templateUrl: './agent-details-section.component.html',
  styleUrl: './agent-details-section.component.css'
})
export class AgentDetailsSectionComponent {
  @Input() agentDetails!: any;
}
