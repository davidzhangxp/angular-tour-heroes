import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  favoriteColorControl = new FormControl('');
  favoriteColor = '';
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
    this.maxDate = new Date();
    this.maxDate.setDate(this.minDate.getDate() + 13);
  }
  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
  pickdate = new FormControl('');
  minDate = new Date();
  maxDate = new Date();

  ngsubmit() {
    console.log(this.pickdate.value);
  }
  dateFilter = (date: Date): boolean => {
    const dat = date.getDay();
    return dat !== 0 && dat !== 6;
  };
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}
