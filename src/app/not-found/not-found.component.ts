import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  OnInit,
} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TitleService } from '../core/title.service';
import { SharedModule } from '../shared/shared.module';

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

const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [NotFoundComponent],
})
export class NotFoundModule {}
