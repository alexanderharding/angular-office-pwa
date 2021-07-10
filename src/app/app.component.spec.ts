import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  @Component({
    selector: 'core-footer',
    template: '<div></div>',
  })
  class FakeFooterComponent {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, FakeFooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Arrange
    // Act
    fixture.detectChanges();
    // Assert
    expect(component).toBeTruthy();
  });
});

describe('AppComponent w/ template', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, FooterComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Arrange
    // Act
    fixture.detectChanges();
    // Assert
    expect(component).toBeTruthy();
  });

  it('should set RouterOutlet in template', () => {
    // Arrange
    // Act
    fixture.detectChanges();
    // Assert
    const routerOutletDEs: DebugElement[] = fixture.debugElement.queryAll(
      By.directive(RouterOutlet)
    );
    expect(routerOutletDEs.length).toBe(1);
  });

  it('should set FooterComponent in template', () => {
    // Arrange
    // Act
    fixture.detectChanges();
    // Assert
    const footerComponentDEs: DebugElement[] = fixture.debugElement.queryAll(
      By.directive(FooterComponent)
    );
    expect(footerComponentDEs.length).toBe(1);
  });
});
