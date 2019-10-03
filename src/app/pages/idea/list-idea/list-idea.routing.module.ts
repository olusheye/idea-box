import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListIdeaComponent } from './list-idea.component';

const routes: Routes = [
  {
    path: '',
    component: ListIdeaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListIdeaRoutingRoutes {}
