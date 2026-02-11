import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeroesRoutingModule],
  exports: [HeroesRoutingModule],
  providers: [HeroService],
})
export class HeroesModule {}
