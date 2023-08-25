import { InstruccionesComponent } from './pages/user/instrucciones/instrucciones.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NormalGuard } from './services/ModuloRoles/normal.guard';
import { AdminGuard } from './services/ModuloRoles/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewRolComponent} from "./pages/admin/Usuarios/view-rol/view-rol.component";
import {AddRolComponent} from "./pages/admin/Usuarios/add-rol/add-rol.component";
import {EditRolComponent} from "./pages/admin/Usuarios/edit-rol/edit-rol.component";
import {ViewUsuarioComponent} from "./pages/admin/Usuarios/view-usuario/view-usuario.component";
import {AddUsuarioComponent} from "./pages/admin/Usuarios/add-usuario/add-usuario.component";
import {EditUsuarioComponent} from "./pages/admin/Usuarios/edit-usuario/edit-usuario.component";

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path : '',
        component : WelcomeComponent
      },
        {
            path:'view-rol',
            component:ViewRolComponent
        },
        {
        path:'add-rol',
        component:AddRolComponent
        },
      {
        path:'edit-rol/:rolId',
        component:EditRolComponent
      },
      {
        path:'view-usuario',
        component:ViewUsuarioComponent
      },
      {
        path:'add-usuario',
        component:AddUsuarioComponent
      },
      {
        path:'edit-usuario/:usuarioId',
        component:EditUsuarioComponent
      },
    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[NormalGuard],
    children : [
      {
        path:'instrucciones',
        component:InstruccionesComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
