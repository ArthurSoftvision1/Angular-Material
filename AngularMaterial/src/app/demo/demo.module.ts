import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { MatIconModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule
    
  ]
})
export class DemoModule { }
