import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: '', component: AddComponent},
  { path: 'state', loadChildren: './state/state.module#StateModule'}
];

export const AppRoutes = RouterModule.forRoot(routes);
