import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  color: string = 'red';
  setColor(e: any): void {
    this.color = e.target.value;
  }
  selectHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectHero = hero;
    this.messageService.addMessage(`Hero ${hero.name} is selected`);
  }
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
