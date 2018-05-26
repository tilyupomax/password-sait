import { Routes, RouterModule } from '@angular/router';
import { StateComponent } from './state.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  { path: '', component: StateComponent},
  { path: ':id', component: SingleComponent}
];

export const StateRoutes = RouterModule.forChild(routes);
