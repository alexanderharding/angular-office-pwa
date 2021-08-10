import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    FooterComponent,
    BannerComponent,
    HeaderComponent,
    SpinnerComponent,
  ],
  imports: [SharedModule],
  exports: [
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    SpinnerComponent,
  ],
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule)
      throw new Error(`CoreModule is already loaded. Import it in the AppModule
        only`);
  }
}
