import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  const maxSpinnerTimeOutInMs: number = 20000;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    // Arrange

    // Act

    // Assert
    expect(service).toBeTruthy();
  });

  it('should have set isSpinnerActive$ correctly', () => {
    // Arrange

    // Act

    // Assert
    service.isSpinnerActive$.subscribe((isSpinnerActive) =>
      expect(isSpinnerActive).toBeFalse()
    );
  });

  describe('hide', () => {
    it(`should set isSpinnerActive$ correctly`, () => {
      // Arrange
      service.show();
      service.show();

      // Act
      service.hide();

      // Assert
      service.isSpinnerActive$.subscribe((isSpinnerActive) =>
        expect(isSpinnerActive).toBeFalse()
      );
    });
  });

  describe('show', () => {
    it('should set isSpinnerActive$ correctly', () => {
      // Arrange

      // Act
      service.show();

      // Assert
      service.isSpinnerActive$.subscribe((isSpinnerActive) =>
        expect(isSpinnerActive).toBeTrue()
      );
    });
  });

  describe('spinnerTimeout$', () => {
    it('should set isSpinnerActive$ correctly', fakeAsync(() => {
      // Arrange
      const delayInMs: number = 1000;

      // Act
      service.show();
      tick(delayInMs);
      service.show();
      tick(maxSpinnerTimeOutInMs - delayInMs);

      // Assert
      service.isSpinnerActive$.subscribe((isSpinnerActive) =>
        expect(isSpinnerActive).toBeFalse()
      );
    }));
  });
});
