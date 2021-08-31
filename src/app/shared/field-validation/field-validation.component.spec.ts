import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ErrorMessageService } from 'src/app/core/error-message.service';

import { FieldValidationComponent } from './field-validation.component';

fdescribe('FieldValidationComponent', () => {
  let component: FieldValidationComponent;
  let fixture: ComponentFixture<FieldValidationComponent>;
  let mockErrorMessageService: ErrorMessageService;
  let mockControlContainer: ControlContainer;

  const controlName: string = 'firstName';

  beforeEach(async () => {
    mockErrorMessageService = jasmine.createSpyObj([''], {
      [controlName]: {
        required: 'Please enter a first name.',
      },
    });

    mockControlContainer = jasmine.createSpyObj([''], {
      control: new FormGroup({
        [controlName]: new FormControl('', Validators.required),
      }),
    });

    await TestBed.configureTestingModule({
      declarations: [FieldValidationComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: ErrorMessageService, useValue: mockErrorMessageService },
        { provide: ControlContainer, useValue: mockControlContainer },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldValidationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Arrange
    component.controlName = controlName;

    // Act
    fixture.detectChanges();

    // Assert
    expect(component).toBeTruthy();
  });
});
