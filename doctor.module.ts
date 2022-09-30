import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './pages/container/container.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { DoctorRoutingModule } from './doctor-routing.module';


@NgModule({
  declarations: [
    ContainerComponent,
    PatientsListComponent
  ],
  imports: [
    CommonModule, DoctorRoutingModule
  ]
})
export class DoctorModule { }
