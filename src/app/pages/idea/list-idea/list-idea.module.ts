import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListIdeaComponent } from './list-idea.component';
import { ListIdeaRoutingRoutes } from './list-idea.routing.module';

@NgModule({
  imports: [CommonModule, ListIdeaRoutingRoutes],
  declarations: [ListIdeaComponent]
})
export class ListIdeaModule {}
