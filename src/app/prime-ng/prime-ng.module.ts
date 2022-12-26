import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';


@NgModule({
  exports: [ButtonModule,
    CardModule]
})
export class PrimeNgModule { }
