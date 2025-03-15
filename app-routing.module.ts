import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldComponent } from './world/world.component';


const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' }, // Default Route
  { path: 'map', component: WorldComponent } //Map Page        
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
