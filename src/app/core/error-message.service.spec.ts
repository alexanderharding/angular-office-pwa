import { TestBed } from '@angular/core/testing';

import { ErrorMessageService } from './error-message.service';

describe('ErrorMessageService', () => {
  let service: ErrorMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorMessageService);
  });

  it('should be created', () => {
    // Arrange

    // Act

    // Assert
    expect(service).toBeTruthy();
  });

  it('should have set firstName correctly', () => {
    // Arrange

    // Act

    // Assert
    expect(service.firstName).toEqual({
      required: 'Please enter a first name.',
    });
  });
});
