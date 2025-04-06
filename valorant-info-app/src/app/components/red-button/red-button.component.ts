import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-red-button',
  imports: [CommonModule],
  templateUrl: './red-button.component.html',
  styleUrl: './red-button.component.css'
})
export class RedButtonComponent {
  @Input() btnStyle!: boolean;
  @Input() text!: string;
}
