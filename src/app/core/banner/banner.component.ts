import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'core-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {
  @Input() public pageTitle!: string;

  public constructor() {}
}
