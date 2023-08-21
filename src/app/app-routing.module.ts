import { StartComponent } from './pages/user/start/start.component';
import { InstruccionesComponent } from './pages/user/instrucciones/instrucciones.component';
import { LoadExamenComponent } from './pages/user/load-examen/load-examen.component';
import { ActualizarPreguntaComponent } from './pages/admin/ejemplo-Examenes/actualizar-pregunta/actualizar-pregunta.component';
import { AddPreguntaComponent } from './pages/admin/ejemplo-Examenes/add-pregunta/add-pregunta.component';
import { ViewExamenPreguntasComponent } from './pages/admin/ejemplo-Examenes/view-examen-preguntas/view-examen-preguntas.component';
import { AddExamenComponent } from './pages/admin/ejemplo-Examenes/add-examen/add-examen.component';
import { ViewExamenesComponent } from './pages/admin/ejemplo-Examenes/view-examenes/view-examenes.component';
import { AddCategoriaComponent } from './pages/admin/ejemplo-Examenes/add-categoria/add-categoria.component';
import { ViewCategoriasComponent } from './pages/admin/ejemplo-Examenes/view-categorias/view-categorias.component';
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
import { ActualizarExamenComponent } from './pages/admin/ejemplo-Examenes/actualizar-examen/actualizar-examen.component';
import {AddCargoComponent} from "./pages/admin/andamios/add-cargo/add-cargo.component";
import {ViewCargosComponent} from "./pages/admin/andamios/view-cargos/view-cargos.component";
import {EditCargosComponent} from "./pages/admin/andamios/edit-cargos/edit-cargos.component";

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
        path:'categorias',
        component:ViewCategoriasComponent
      },
      {
        path:'add-categoria',
        component:AddCategoriaComponent
      },
      {
        path:'examenes',
        component:ViewExamenesComponent
      },
      {
        path:'add-examen',
        component:AddExamenComponent
      },
      {
        path:'examen/:examenId',
        component:ActualizarExamenComponent
      },
      {
        path:'ver-preguntas/:examenId/:titulo',
        component:ViewExamenPreguntasComponent
      },
      {
        path:'add-pregunta/:examenId/:titulo',
        component : AddPreguntaComponent
      },
      {
        path:'pregunta/:preguntaId',
        component:ActualizarPreguntaComponent
      },
        {
            path:'view-cargos',
            component:ViewCargosComponent
        },
        {
        path:'add-cargo',
        component:AddCargoComponent
        },
      {
        path:'edit-cargo/:cargoId',
        component:EditCargosComponent
      },
    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[NormalGuard],
    children : [
      {
        path:':catId',
        component:LoadExamenComponent
      },
      {
        path:'instrucciones/:examenId',
        component:InstruccionesComponent
      },
    ]
  },
  {
    path:"start/:examenId",
    component:StartComponent,
    canActivate:[NormalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
