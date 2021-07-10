import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TitleService } from '../title.service';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let mockTitleService: TitleService;

  beforeEach(async () => {
    mockTitleService = jasmine.createSpyObj(['setTitle']);
    await TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
      providers: [{ provide: TitleService, useValue: mockTitleService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Arrange
    // Act
    fixture.detectChanges();
    // Assert
    expect(component).toBeTruthy();
  });

  it('should have set pageTitle correctly', () => {
    // Arrange
    // Act
    fixture.detectChanges();
    // Assert
    expect(component.pageTitle).toBe('404');
  });

  it(`should have called setTitle method on TitleService with correct
    value`, () => {
    // Arrange
    // Act
    fixture.detectChanges();
    // Assert
    expect(mockTitleService.setTitle).toHaveBeenCalledOnceWith('Error');
  });
});

describe('NotFoundComponent w/ template', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let mockTitleService: TitleService;

  beforeEach(async () => {
    mockTitleService = jasmine.createSpyObj(['setTitle']);
    await TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
      providers: [{ provide: TitleService, useValue: mockTitleService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Arrange
    // Act
    fixture.detectChanges();
    // Assert
    expect(component).toBeTruthy();
  });

  it('should set pageTitle in the template', () => {
    // Arrange
    // Act
    fixture.detectChanges();
    // Assert
    const headerDEs: DebugElement[] = fixture.debugElement.queryAll(
      By.css('h1')
    );
    expect(headerDEs.length).toBe(1);
    expect(headerDEs[0].nativeElement.textContent).toBe(component.pageTitle);
  });
});
