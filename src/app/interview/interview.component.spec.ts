import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InterviewComponent } from './interview.component';

describe('InterviewComponent', () => {
  let component: InterviewComponent;
  let fixture: ComponentFixture<InterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterviewComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title in the h1 tag', () => {
    component.title = 'def';
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('h1')).nativeElement.textContent
    ).toContain('def');
  });
  it('should have the same color', () => {
    component.onClick('red');
    expect(component.border_color).toEqual('red');
  });
});
