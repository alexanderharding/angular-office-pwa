import { Component } from '@angular/core';

import { TitleService } from '../title.service';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public readonly appTitle: string = this.titleService.appTitle;

  public constructor(private readonly titleService: TitleService) {}
}
