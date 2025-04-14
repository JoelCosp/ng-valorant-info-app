import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { AboutComponent } from './pages/about/about.component';
import { AgentsComponent } from './pages/agents/agents.component';
import { MapsComponent } from './pages/maps/maps.component';
import { WeaponsComponent } from './pages/weapons/weapons.component';
import { AgentDetailsComponent } from './pages/agent-details/agent-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'agents', component: AgentsComponent },
    { path: 'agents/:id', component: AgentDetailsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'weapons', component: WeaponsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'news', component: NewsComponent },
    { path: '**', component: HomeComponent },
];
