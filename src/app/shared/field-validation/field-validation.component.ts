import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { EMPTY, Observable, Subject, timer } from 'rxjs';
import { debounce, distinctUntilChanged, map, startWith } from 'rxjs/operators';

import { ErrorMessageService } from '../../core/error-message.service';
import { IErrorMessage } from '../../core/types/error-message';

/**
 * Extract arguments of function
 */
type ArgumentsType<F> = F extends (...args: infer A) => any ? A : never;

type ErrorMessageType = 'tooltip' | 'feedback';

/**
 * Creates an object like O. Optionally provide minimum set of properties P
 * which the objects must share to conform
 */
type ObjectLike<O extends object, P extends keyof O = keyof O> = Pick<O, P>;

/**
 * Extract a touched changed observable from an abstract control
 * @param control AbstractControl like object with markAsTouched method
 */
const extractTouchedChanges = (
  control: ObjectLike<AbstractControl, 'markAsTouched' | 'markAsUntouched'>
): Observable<boolean> => {
  const prevMarkAsTouched: (opts?: { onlySelf?: boolean }) => void =
    control.markAsTouched;
  const prevMarkAsUntouched: (opts?: { onlySelf?: boolean }) => void =
    control.markAsUntouched;

  const isTouchedSubject: Subject<boolean> = new Subject<boolean>();

  function nextMarkAsTouched(
    ...args: ArgumentsType<AbstractControl['markAsTouched']>
  ): void {
    prevMarkAsTouched.bind(control)(...args);
    isTouchedSubject.next(true);
  }

  function nextMarkAsUntouched(
    ...args: ArgumentsType<AbstractControl['markAsUntouched']>
  ): void {
    prevMarkAsUntouched.bind(control)(...args);
    isTouchedSubject.next(false);
  }

  control.markAsTouched = nextMarkAsTouched;
  control.markAsUntouched = nextMarkAsUntouched;

  return isTouchedSubject.asObservable().pipe(distinctUntilChanged());
};

@Component({
  selector: 'shared-field-validation',
  templateUrl: './field-validation.component.html',
  styleUrls: ['./field-validation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldValidationComponent implements OnInit {
  @Input() public controlName: string = '';
  @Input() public errorMessageType: ErrorMessageType = 'tooltip';
  public errorMessage$?: Observable<string>;
  public isTouched$?: Observable<boolean>;
  public parentForm: FormGroup = new FormGroup({});
  @Input() public showOverride: boolean = true;

  private control: FormControl = new FormControl();
  private errorMessages?: IErrorMessage;

  public constructor(
    private readonly errorMessageService: ErrorMessageService,
    private readonly controlContainer: ControlContainer
  ) {}

  public ngOnInit(): void {
    this.parentForm = this.controlContainer.control as FormGroup;

    this.control = this.parentForm.get(this.controlName) as FormControl;

    this.errorMessages = (this.errorMessageService as any)[
      this.controlName
    ] as IErrorMessage;

    this.errorMessage$ = this.control.valueChanges.pipe(
      startWith(this.getErrorMessage(this.control)),
      map(() => this.getErrorMessage(this.control)),
      debounce((errorMessage) => (errorMessage ? timer(1000) : EMPTY)),
      distinctUntilChanged()
    );

    this.isTouched$ = extractTouchedChanges(this.control);
  }

  private getErrorMessage(c: FormControl): string {
    if (c.errors) {
      return Object.keys(c.errors)
        .map((key) => (this.errorMessages as any)[key])
        .join(' ');
    }
    return '';
  }
}
