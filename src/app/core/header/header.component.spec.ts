import {
  Component,
  DebugElement,
  Input,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BannerComponent } from '../banner/banner.component';
import { TitleService } from '../title.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockTitleService: TitleService;

  const appTitle: string = 'App Title';

  @Component({
    selector: 'core-banner',
    template: '<div></div>',
  })
  class FakeBannerComponent {
    @Input() public pageTitle!: string;
  }

  beforeEach(async () => {
    mockTitleService = jasmine.createSpyObj([], { appTitle });
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, FakeBannerComponent],
      providers: [{ provide: TitleService, useValue: mockTitleService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Arrange
    // Act
    fixture.detectChanges();
    // Assert
    expect(component).toBeTruthy();
  });

  it('should have set appTitle correctly', () => {
    // Arrange
    // Act
    fixture.detectChanges();
    // Assert
    expect(component.appTitle).toBe(appTitle);
  });
});

describe('HeaderComponent w/ template', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockTitleService: TitleService;

  const appTitle: string = 'App Title';

  beforeEach(async () => {
    mockTitleService = jasmine.createSpyObj([], { appTitle });
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, BannerComponent],
      providers: [{ provide: TitleService, useValue: mockTitleService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Arrange
    // Act
    fixture.detectChanges();
    // Assert
    expect(component).toBeTruthy();
  });

  it('should set BannerComponent in template', () => {
    // Arrange
    // Act
    fixture.detectChanges();
    // Assert
    const bannerComponentDEs: DebugElement[] = fixture.debugElement.queryAll(
      By.directive(BannerComponent)
    );
    expect(bannerComponentDEs.length).toBe(1);
    expect(bannerComponentDEs[0].componentInstance.pageTitle).toBe(
      component.appTitle
    );
  });
});
