import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Crisis } from './utils';
import { EMPTY, mergeMap, of, take } from 'rxjs';
import { CrisisService } from './crisis.service';

@Injectable()
export class CrisisDetailResolverService implements Resolve<Crisis> {
  constructor(
    private crisisService: CrisisService,
    private router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = Number(route.paramMap.get('id'));

    return this.crisisService.getCrisis(id).pipe(
      take(1),
      mergeMap((crisis) => {
        if (crisis) {
          return of(crisis);
        } else {
          this.router.navigate(['/crisis-center']);
          return EMPTY;
        }
      }),
    );
  }
}
