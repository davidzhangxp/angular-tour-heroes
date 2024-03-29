import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css'],
})
export class HerodetailComponent implements OnInit {
  hero?: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  getHero(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }
  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getHero();
  }
}
