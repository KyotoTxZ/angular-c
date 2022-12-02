import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FranciaComponent } from './francia/francia.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'francia',
    component: FranciaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
