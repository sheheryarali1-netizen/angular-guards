import { Injectable } from '@angular/core';
import { CRISES } from './utils';
import { map, of } from 'rxjs';

@Injectable()
export class CrisisService {
  public getCrises() {
    return of(CRISES);
  }

  public getCrisis(id: number) {
    return this.getCrises().pipe(
      map((crises) => crises.find((item) => item.id === id)!),
    );
  }
}
