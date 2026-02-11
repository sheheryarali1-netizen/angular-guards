import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  public confirm(message: string) {
    const confirmation = window.confirm(message);

    return confirmation;
  }
}
