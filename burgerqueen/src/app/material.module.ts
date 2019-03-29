import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
  MatInputModule,
  MatDividerModule,
  MatChipsModule
} from '@angular/material';

@NgModule({
  imports: [
    // Cosas a importar
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatChipsModule
  ],
  exports: [
    // Cosas a exportar
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatChipsModule
  ]
})
export class MaterialModule {}
