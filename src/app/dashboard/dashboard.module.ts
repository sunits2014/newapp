import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AboutappComponent } from '../aboutapp/aboutapp.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    DashboardComponent,
    AboutappComponent
  ]
})
export class DashboardModule { }
