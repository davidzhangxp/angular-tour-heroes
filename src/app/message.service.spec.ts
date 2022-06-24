import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should nave no messages at the begin', () => {
    expect(service.messages.length).toBe(0);
  });

  it('should add a message when add is called', () => {
    service.addMessage('message1');
    expect(service.messages.length).toBe(1);
  });
  it('should remove all messages when clear is called', () => {
    service.addMessage('message1');
    service.clear();
    expect(service.messages.length).toBe(0);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
describe('my first test', () => {
  let message: string;
  beforeEach(() => {
    message = 'test message service';
  });
  it('should be true if message is display', () => {
    //arrange

    //acting
    //assert
    expect(message).toEqual('test message service');
  });
});
