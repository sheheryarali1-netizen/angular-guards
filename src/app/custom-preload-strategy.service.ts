import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomPreloadStrategyService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>) {
    if (route.data?.['preload'] && route.path) {
      return load();
    } else {
      return of(null);
    }
  }
}
