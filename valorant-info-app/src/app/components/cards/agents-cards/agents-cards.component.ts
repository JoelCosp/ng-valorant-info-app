import { Component, Input } from '@angular/core';
import { Agent } from '../../../models/Agent';

@Component({
  selector: 'app-agents-cards',
  imports: [],
  templateUrl: './agents-cards.component.html',
  styleUrl: './agents-cards.component.css'
})
export class AgentsCardsComponent {
  @Input() agent!: Agent;
}
