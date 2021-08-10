import { Component, Input } from '@angular/core';

@Component({
  selector: 'core-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  @Input() public isSpinnerActive: boolean = false;
}
