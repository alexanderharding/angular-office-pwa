import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'core-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public readonly gitHubUrl: string = 'https://github.com/alexanderharding';
  public readonly repoUrl: string =
    'https://github.com/alexanderharding/angular-office-pwa';

  public constructor() {}
}
