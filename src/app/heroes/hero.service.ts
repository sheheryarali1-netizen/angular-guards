import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HEROES } from './utils';

@Injectable()
export class HeroService {
  public getHeroes() {
    return of(HEROES);
  }
}
