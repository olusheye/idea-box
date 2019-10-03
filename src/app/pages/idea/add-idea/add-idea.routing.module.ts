import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddIdeaComponent } from './add-idea.component';

const routes: Routes = [
  {
    path: '',
    component: AddIdeaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddIdeaRoutingRoutes {}
