import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    FooterComponent,
    BannerComponent,
    HeaderComponent,
  ],
  imports: [SharedModule],
  exports: [NotFoundComponent, FooterComponent, HeaderComponent],
})
export class CoreModule {}
