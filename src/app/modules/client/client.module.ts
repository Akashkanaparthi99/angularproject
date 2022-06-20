import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    ClientListComponent,
    ClientDetailsComponent,
    ProjectListComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
