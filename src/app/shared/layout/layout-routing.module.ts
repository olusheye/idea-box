import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'prefix' },
      {
        path: 'add-idea',
        loadChildren: () =>
          import('../../pages/idea/add-idea/add-idea.module').then(
            m => m.AddIdeaModule
          )
      },
      {
        path: 'list-idea',
        loadChildren: () =>
          import('../../pages/idea/list-idea/list-idea.module').then(
            m => m.ListIdeaModule
          )
      },
      {
        path: 'signin',
        loadChildren: () =>
          import('../../pages/account/signin/signin.module').then(
            m => m.SigninModule
          )
      },
      {
        path: 'signup',
        loadChildren: () =>
          import('../../pages/account/signup/signup.module').then(
            m => m.SignupModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRouting {}
