import { Component, Input } from '@angular/core';
import { Agent } from '../../../models/Agent';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agents-cards',
  imports: [RouterLink],
  templateUrl: './agents-cards.component.html',
  styleUrl: './agents-cards.component.css'
})
export class AgentsCardsComponent {
  @Input() agent!: Agent;
}
