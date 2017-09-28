import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    MenuComponent
  ],
  exports:[
    HeaderComponent,
    MenuComponent
  ]
})
export class SharedModule { }
