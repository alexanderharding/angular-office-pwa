import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent, FooterComponent],
  imports: [SharedModule],
  exports: [NotFoundComponent, FooterComponent],
})
export class CoreModule {}
