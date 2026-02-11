import { Component } from '@angular/core';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css'],
})
export class CrisisListComponent {
  constructor(private crisisService: CrisisService) {}

  public crises$ = this.crisisService.getCrises();
}
