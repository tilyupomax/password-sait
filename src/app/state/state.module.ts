import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateRoutes } from './state.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';

import { StateComponent } from './state.component';
import { SingleComponent } from './single/single.component';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule,
    StateRoutes,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [
    StateComponent,
    SingleComponent,
    CommentComponent,
    AddCommentComponent
]
})
export class StateModule { }
