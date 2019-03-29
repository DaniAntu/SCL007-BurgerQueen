import { NgModule } from '@angular/core';

import { MatToolbarModule, MatIconModule, MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    // Cosas a importar
    MatToolbarModule,
    MatIconModule,
    MatGridListModule
  ],
  exports: [
    // Cosas a exportar
    MatToolbarModule,
    MatIconModule,
    MatGridListModule
  ]
})
export class MaterialModule {}
