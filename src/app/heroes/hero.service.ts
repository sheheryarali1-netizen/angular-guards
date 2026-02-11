import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { HEROES } from './utils';

@Injectable()
export class HeroService {
  public getHeroes() {
    return of(HEROES);
  }

  public getHero(id: number) {
    return this.getHeroes().pipe(
      map((heroes) => heroes.find((item) => item.id === id)!),
    );
  }
}
