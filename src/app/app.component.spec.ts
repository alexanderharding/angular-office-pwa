import {
  Component,
  DebugElement,
  Input,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';

import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { SpinnerService } from './core/spinner.service';
import { SpinnerComponent } from './core/spinner/spinner.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockSpinnerService: any;

  const isSpinnerActive: boolean = false;

  @Component({
    selector: 'core-footer',
    template: '<div></div>',
  })
  class FakeFooterComponent {}

  @Component({
    selector: 'core-header',
    template: '<div></div>',
  })
  class FakeHeaderComponent {}

  @Component({
    selector: 'core-spinner',
    template: '<div></div>',
  })
  class FakeSpinnerComponent {
    @Input() public isSpinnerActive: boolean = false;
  }

  beforeEach(async () => {
    mockSpinnerService = jasmine.createSpyObj([''], {
      isSpinnerActive$: of(isSpinnerActive),
    });
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        FakeFooterComponent,
        FakeHeaderComponent,
        FakeSpinnerComponent,
      ],
      providers: [{ provide: SpinnerService, useValue: mockSpinnerService }],
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

  it(`should set isSpinnerActive$ correctly`, () => {
    // Arrange

    // Act
    fixture.detectChanges();

    // Assert
    component.isSpinnerActive$.subscribe((isSpinnerActive) =>
      expect(isSpinnerActive).toBeFalse()
    );
  });
});

describe('AppComponent w/ template', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockSpinnerService: any;

  const isSpinnerActive: boolean = true;

  beforeEach(async () => {
    mockSpinnerService = jasmine.createSpyObj([''], {
      isSpinnerActive$: of(isSpinnerActive),
    });
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        SpinnerComponent,
      ],
      providers: [{ provide: SpinnerService, useValue: mockSpinnerService }],
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

  it('should set HeaderComponent in template', () => {
    // Arrange

    // Act
    fixture.detectChanges();

    // Assert
    const headerComponentDEs: DebugElement[] = fixture.debugElement.queryAll(
      By.directive(HeaderComponent)
    );
    expect(headerComponentDEs.length).toBe(1);
  });

  it('should set SpinnerComponent in template', () => {
    // Arrange

    // Act
    fixture.detectChanges();

    const spinnerComponentDEs: DebugElement[] = fixture.debugElement.queryAll(
      By.directive(SpinnerComponent)
    );
    component.isSpinnerActive$.subscribe((isSpinnerActive) => {
      // Assert
      expect(spinnerComponentDEs.length).toBe(1);
      expect(spinnerComponentDEs[0].componentInstance.isSpinnerActive).toBe(
        isSpinnerActive
      );
    });
  });
});
