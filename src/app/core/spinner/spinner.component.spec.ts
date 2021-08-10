import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinnerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Arrange

    // Act
    fixture.detectChanges();

    // Assert
    expect(component).toBeTruthy();
  });

  it('should have set isSpinnerActive correctly', () => {
    // Arrange

    // Act
    fixture.detectChanges();

    // Assert
    expect(component.isSpinnerActive).toBeFalse();
  });
});

describe('SpinnerComponent w/ template', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinnerComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Arrange

    // Act
    fixture.detectChanges();

    // Assert
    expect(component).toBeTruthy();
  });

  it(`should show spinner if isSpinnerActive is 'true'`, () => {
    // Arrange
    component.isSpinnerActive = true;

    // Act
    fixture.detectChanges();

    // Assert
    const statusElementDEs: DebugElement[] = fixture.debugElement.queryAll(
      By.css('div[role=status]')
    );
    expect(statusElementDEs.length).toBe(1);
  });

  it(`should not show spinner if isSpinnerActive is 'false'`, () => {
    // Arrange
    component.isSpinnerActive = false;

    // Act
    fixture.detectChanges();

    // Assert
    const statusElementDEs: DebugElement[] = fixture.debugElement.queryAll(
      By.css('div[role=status]')
    );
    expect(statusElementDEs.length).toBe(0);
  });
});
