import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Arrange
    // Act
    fixture.detectChanges();
    // Assert
    expect(component).toBeTruthy();
  });

  it('should have set gitHubUrl correctly', () => {
    // Arrange
    // Act
    fixture.detectChanges();
    // Assert
    expect(component.gitHubUrl).toBe('https://github.com/alexanderharding');
  });

  it('should have set repoUrl correctly', () => {
    // Arrange
    // Act
    fixture.detectChanges();
    // Assert
    expect(component.repoUrl).toBe(
      'https://github.com/alexanderharding/angular-office-pwa'
    );
  });
});

describe('FooterComponent w/ template', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Arrange

    // Act
    fixture.detectChanges();

    // Assert
    expect(component).toBeTruthy();
  });

  it('should set gitHubUrl in template', () => {
    // Arrange

    // Act
    fixture.detectChanges();

    // Assert
    const anchorDEs: DebugElement[] = fixture.debugElement.queryAll(
      By.css('a')
    );
    expect(anchorDEs.length).toBe(2);
    expect(anchorDEs[0].nativeElement.getAttribute('href')).toBe(
      component.gitHubUrl
    );
  });

  it('should set repoUrl in template', () => {
    // Arrange

    // Act
    fixture.detectChanges();

    // Assert
    const anchorDEs: DebugElement[] = fixture.debugElement.queryAll(
      By.css('a')
    );
    expect(anchorDEs.length).toBe(2);
    expect(anchorDEs[1].nativeElement.getAttribute('href')).toBe(
      component.repoUrl
    );
  });
});
