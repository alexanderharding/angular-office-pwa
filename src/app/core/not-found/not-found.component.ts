import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { TitleService } from '../title.service';

@Component({
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent implements OnInit {
  public readonly pageTitle: string = '404';

  public constructor(private readonly titleService: TitleService) {}

  public ngOnInit(): void {
    this.titleService.setTitle('Error');
  }
}
