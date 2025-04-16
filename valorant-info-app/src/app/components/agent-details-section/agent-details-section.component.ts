import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agent-details-section',
  imports: [MatTabsModule, CommonModule],
  templateUrl: './agent-details-section.component.html',
  styleUrl: './agent-details-section.component.css'
})
export class AgentDetailsSectionComponent {
  @Input() agentDetails!: any;
}
