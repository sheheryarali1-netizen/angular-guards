import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrisisService } from '../crisis.service';
import { Observable, switchMap } from 'rxjs';
import { Crisis } from '../utils';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
})
export class CrisisDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService,
  ) {}

  public crisis?: Crisis;
  public editName = '';

  public ngOnInit() {
    this.route.data.subscribe((data) => {
      const crisis: Crisis = data['crisis'];
      this.crisis = crisis;
      this.editName = crisis.name;
    });
  }

  public save() {
    if (this.crisis) {
      this.crisis.name = this.editName;
    }

    this.cancel();
  }

  public cancel() {
    this.router.navigate(['../']);
  }
}
