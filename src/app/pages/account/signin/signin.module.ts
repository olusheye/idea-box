import { SigninRoutingRoutes } from './signin.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';

@NgModule({
  imports: [CommonModule, SigninRoutingRoutes],
  declarations: [SigninComponent]
})
export class SigninModule {}
