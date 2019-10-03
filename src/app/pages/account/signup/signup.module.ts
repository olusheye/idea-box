import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupRoutingRoutes } from './signup.routing.module';

@NgModule({
  imports: [CommonModule, SignupRoutingRoutes],
  declarations: [SignupComponent]
})
export class SignupModule {}
