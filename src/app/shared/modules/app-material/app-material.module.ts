import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  exports: [
    MatTableModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule
  ],
})
export class AppMaterialModule { }
