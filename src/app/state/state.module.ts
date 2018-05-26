import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateComponent } from './state.component';
import { SingleComponent } from './single/single.component';
import { StateRoutes } from './state.routing';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    StateRoutes,
    MatButtonModule
  ],
  declarations: [
    StateComponent,
    SingleComponent
]
})
export class StateModule { }
