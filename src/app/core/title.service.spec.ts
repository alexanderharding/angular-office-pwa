import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';

import { TitleService } from './title.service';

describe('TitleService', () => {
  let service: TitleService;
  let mockTitle: Title;

  beforeEach(() => {
    mockTitle = jasmine.createSpyObj(['setTitle']);
    TestBed.configureTestingModule({
      providers: [{ provide: Title, useValue: mockTitle }],
    });
    service = TestBed.inject(TitleService);
  });

  it('should be created', () => {
    // Arrange

    // Act

    // Assert
    expect(service).toBeTruthy();
  });

  it('should have set appTitle correctly', () => {
    // Arrange

    // Act

    // Assert
    expect(service.appTitle).toBe('Office');
  });

  describe('setTitle', () => {
    it('should call setTitle on Title with correct value', () => {
      // Arrange
      const newTitle: string = 'Title';

      // Act
      service.setTitle(newTitle);

      // Assert
      expect(mockTitle.setTitle).toHaveBeenCalledOnceWith(
        `${newTitle} | ${service.appTitle}`
      );
    });
  });
});
