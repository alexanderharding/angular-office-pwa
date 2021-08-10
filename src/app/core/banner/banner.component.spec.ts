import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
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
    expect(component.pageTitle).toBeUndefined();
  });
});

describe('BannerComponent w/ template', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Arrange

    // Act
    fixture.detectChanges();

    // Assert
    expect(component).toBeTruthy();
  });

  it('should set pageTitle in template', () => {
    // Arrange
    component.pageTitle = 'App Title';

    // Act
    fixture.detectChanges();

    // Assert
    const anchorDEs: DebugElement[] = fixture.debugElement.queryAll(
      By.css('a')
    );
    expect(anchorDEs.length).toBe(1);
    expect(anchorDEs[0].nativeElement.textContent).toBe(component.pageTitle);
    expect(anchorDEs[0].nativeElement.getAttribute('routerLink')).toBe('/');
  });
});
