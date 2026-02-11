import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Hero } from '../utils';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) {}

  public hero$!: Observable<Hero>;

  public ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((paramMap) => {
        const id = Number(paramMap.get('id'));
        return this.heroService.getHero(id);
      }),
    );
  }

  public goBack() {
    this.location.back();
  }
}
