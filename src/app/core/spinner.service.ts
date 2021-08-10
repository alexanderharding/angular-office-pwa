import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, timer } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  mapTo,
  switchMap,
  tap,
} from 'rxjs/operators';

import { ISpinner } from './types/spinner';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  public isSpinnerActive$: Observable<boolean>;

  private readonly defaultName: string = 'routerSpinner';
  private readonly isSpinnerActiveSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private readonly maxSpinnerTimeOutInMs: number = 20000;
  private spinners: ISpinner[] = [];
  private spinnerTimeout$: Observable<void>;

  public constructor() {
    this.isSpinnerActive$ = this.isSpinnerActiveSubject
      .asObservable()
      .pipe(distinctUntilChanged());
    this.spinnerTimeout$ = this.isSpinnerActive$.pipe(
      switchMap((isActive) =>
        isActive
          ? timer(this.maxSpinnerTimeOutInMs).pipe(mapTo(true))
          : of(false)
      ),
      filter((isTimedOut) => !!isTimedOut),
      tap(() => this.hideAll()),
      map(() => void 0)
    );
    // Spinner timeout is meant to prevent long running spinners. Spinner
    // timeout subscription should live as long as the lifetime of the
    // application.
    this.spinnerTimeout$.subscribe();
  }

  public hide(name: string = this.defaultName): void {
    if (!this.spinners.length) return;
    if (!this.some(name)) {
      const errorMessage: string = `Tried to hide "${name}" spinners but none
      were found.`;
      console.warn(errorMessage);
      return;
    }
    this.spinners = this.filter(name);
    if (!this.spinners.length) this.isSpinnerActiveSubject.next(false);
  }

  public show(
    name: string = this.defaultName,
    allowTimeout: boolean = true
  ): void {
    this.spinners.push({
      name,
      allowTimeout,
    });
    this.isSpinnerActiveSubject.next(true);
  }

  private filter(name: string): ISpinner[] {
    return this.spinners.filter(
      (spinner) => spinner.name.toLowerCase() !== name.toLowerCase()
    );
  }

  private hideAll(): void {
    if (this.spinners.length) this.spinners = [];
    this.isSpinnerActiveSubject.next(false);
  }

  private some(name: string): boolean {
    return this.spinners.some(
      (spinner) => spinner.name.toLowerCase() === name.toLowerCase()
    );
  }
}
