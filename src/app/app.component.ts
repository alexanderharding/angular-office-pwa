import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { SpinnerService } from './core/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public readonly isSpinnerActive$: Observable<boolean> =
    this.spinnerService.isSpinnerActive$;

  public constructor(private readonly spinnerService: SpinnerService) {}
}
