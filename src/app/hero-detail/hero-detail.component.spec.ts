import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the correct hero', () => {
    component.hero = { id: 11, name: 'Dr Nice' };
    expect(component.hero.name).toEqual('Dr Nice');
  });

  it('should render the hero in the h2 tag', () => {
    component.hero = { id: 11, name: 'Dr Nice' };
    fixture.detectChanges();
    // expect(
    //   fixture.debugElement.query(By.css('h2')).nativeElement.textContent
    // ).toContain('Dr Nice');
    expect(fixture.nativeElement.querySelector('h2').textContent).toContain(
      'Dr Nice'
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
