import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [CommonModule, HeroesRoutingModule, FormsModule],
  exports: [HeroesRoutingModule],
  providers: [HeroService],
})
export class HeroesModule {}
