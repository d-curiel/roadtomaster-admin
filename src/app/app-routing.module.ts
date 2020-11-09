import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionComponent } from './pages/champion/champion.component';
import { ItemsComponent } from './pages/items/items.component';
import { TraitsComponent } from './pages/traits/traits.component';

const routes: Routes = [
  {path: 'champions', component: ChampionComponent},
  {path: 'traits', component: TraitsComponent},
  {path: 'items', component: ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
