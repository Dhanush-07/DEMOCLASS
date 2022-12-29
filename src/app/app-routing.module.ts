import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path : "forms",
    component:FormsComponent
  },
  {
    path : "binding",
    component:BindingComponent
  },


{
  path : "register",
  component:RegisterComponent
},
{
  path : "login",
  component:LoginComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
