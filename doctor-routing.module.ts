import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { ContainerComponent } from './pages/container/container.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'patients'
      },
      {
        path: 'patients',
        component: PatientsListComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
