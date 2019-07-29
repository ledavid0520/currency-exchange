import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivisaComponent } from './business/divisa/divisa.component';


const routes: Routes = [
  {
    path: 'divisas',
    component: DivisaComponent
  },
  { path: '', redirectTo: '/divisas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
