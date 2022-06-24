// import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HeroesComponent } from './heroes.component';

// import { HeroesComponent } from './heroes.component';

// describe('HeroesComponent', () => {
//   let component: HeroesComponent;
//   let fixture: ComponentFixture<HeroesComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ HeroesComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HeroesComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES: any;
  let mockHeroService: any;
  let mockMessageService: any;
  let fixture: ComponentFixture<HeroesComponent>;
  //   beforeEach(() => {
  //     HEROES = [
  //       { id: 11, name: 'Dr Nice' },
  //       { id: 12, name: 'Narco' },
  //       { id: 13, name: 'Bombasto' },
  //     ];
  //     mockHeroService = jasmine.createSpyObj(['getHeroes']);
  //     mockMessageService = jasmine.createSpyObj(['addMessage']);
  //     component = new HeroesComponent(mockHeroService, mockMessageService);
  //   });
  beforeEach(() => {
    HEROES = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
    ];
    mockHeroService = jasmine.createSpyObj(['getHeroes']);
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    mockMessageService = jasmine.createSpyObj(['addMessage']);
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [
        { provide: HeroService, useValue: mockHeroService },
        { provide: MessageService, useValue: mockMessageService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set heroes correctly from the service', () => {
    expect(component.heroes.length).toBe(3);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the same hero', () => {
    mockMessageService.addMessage.and.returnValue(true);
    component.onSelect(HEROES[1]);
    expect(component.selectHero).toEqual(HEROES[1]);
  });
  it('should call onSelect', () => {
    mockMessageService.addMessage.and.returnValue(true);
    component.onSelect(HEROES[1]);
    expect(mockMessageService.addMessage).toHaveBeenCalled();
  });
  it('should call getHeroes', () => {
    mockHeroService.getHeroes.and.returnValue(of(true));
    component.getHeroes();
    expect(mockHeroService.getHeroes).toHaveBeenCalled();
  });
});
