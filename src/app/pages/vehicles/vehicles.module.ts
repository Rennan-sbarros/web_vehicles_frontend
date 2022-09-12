import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { AppMaterialModule } from 'src/app/shared/modules/app-material/app-material.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';


@NgModule({
  declarations: [
    VehiclesListComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    LayoutModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VehiclesModule { }
