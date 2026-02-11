import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent {
  constructor(private heroService: HeroService) {}

  public heroes$ = this.heroService.getHeroes();
}
