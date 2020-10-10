import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: 'signin', component: SignInComponent},
      {path: 'signup', component: SignUpComponent, 
      // canDeactivate: [SignupGuard]
    }
    ]
  }
]


@NgModule({
  declarations: [AuthComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    RouterModule,
    FormsModule,
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
