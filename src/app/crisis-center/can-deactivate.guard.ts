import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<CrisisDetailComponent> {
  canDeactivate(component: CrisisDetailComponent) {
    if (!component.crisis || component.crisis.name === component.editName)
      return true;

    return component.dialogService.confirm('Are you sure?');
  }
}
