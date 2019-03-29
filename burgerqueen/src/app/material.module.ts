import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
  MatInputModule,
  MatDividerModule
} from '@angular/material';

@NgModule({
  imports: [
    // Cosas a importar
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule
  ],
  exports: [
    // Cosas a exportar
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule
  ]
})
export class MaterialModule {}
