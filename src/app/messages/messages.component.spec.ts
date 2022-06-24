import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;
  let mockMessageService: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['getMessages', 'clear']);
    fixture = TestBed.createComponent(MessagesComponent);
    // component = fixture.componentInstance;
    component = new MessagesComponent(mockMessageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call clear', () => {
    mockMessageService.clear.and.returnValue(true);
    component.deleteMessage();
    expect(mockMessageService.clear).toHaveBeenCalled();
  });
});
