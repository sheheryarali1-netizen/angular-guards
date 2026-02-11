import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrisisService } from '../crisis.service';
import { Observable, switchMap } from 'rxjs';
import { Crisis } from '../utils';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
})
export class CrisisDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private crisisService: CrisisService,
    private router: Router,
  ) {}

  public crisis$!: Observable<Crisis>;

  public ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((paramMap) => {
        const id = Number(paramMap.get('id'));
        return this.crisisService.getCrisis(id);
      }),
    );
  }

  public save() {}

  public cancel() {
    this.router.navigate(['../']);
  }
}
