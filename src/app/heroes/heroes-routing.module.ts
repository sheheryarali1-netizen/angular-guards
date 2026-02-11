import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesListComponent,
  },
];

@NgModule({
  declarations: [HeroesListComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
