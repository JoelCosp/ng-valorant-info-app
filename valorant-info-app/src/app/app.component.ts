import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AgentsComponent } from './pages/agents/agents.component';
import { MapsComponent } from './pages/maps/maps.component';
import { WeaponsComponent } from './pages/weapons/weapons.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';

// Components
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HomeComponent, AgentsComponent, MapsComponent, WeaponsComponent, AboutComponent, NewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'valorant-info-app';
}
