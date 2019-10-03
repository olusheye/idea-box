import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddIdeaComponent } from './add-idea.component';
import { AddIdeaRoutingRoutes } from './add-idea.routing.module';

@NgModule({
  imports: [CommonModule, AddIdeaRoutingRoutes],
  declarations: [AddIdeaComponent]
})
export class AddIdeaModule {}
