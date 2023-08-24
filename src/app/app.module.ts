import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/ModuloLogin/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './pages/admin/ejemplo-Examenes/view-categorias/view-categorias.component';
import { AddCategoriaComponent } from './pages/admin/ejemplo-Examenes/add-categoria/add-categoria.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatLineModule} from "@angular/material/core";
import { ViewExamenesComponent } from './pages/admin/ejemplo-Examenes/view-examenes/view-examenes.component';
import { AddExamenComponent } from './pages/admin/ejemplo-Examenes/add-examen/add-examen.component';
import { ActualizarExamenComponent } from './pages/admin/ejemplo-Examenes/actualizar-examen/actualizar-examen.component';
import { ViewExamenPreguntasComponent } from './pages/admin/ejemplo-Examenes/view-examen-preguntas/view-examen-preguntas.component';
import { AddPreguntaComponent } from './pages/admin/ejemplo-Examenes/add-pregunta/add-pregunta.component';
import { ActualizarPreguntaComponent } from './pages/admin/ejemplo-Examenes/actualizar-pregunta/actualizar-pregunta.component';
import { SidebarComponent as UserSidebar} from './pages/user/sidebar/sidebar.component';
import { LoadExamenComponent } from './pages/user/load-examen/load-examen.component';
import { InstruccionesComponent } from './pages/user/instrucciones/instrucciones.component';
import { StartComponent } from './pages/user/start/start.component';
import { NgxUiLoaderModule , NgxUiLoaderHttpModule } from "ngx-ui-loader";
import { AddCargoComponent } from './pages/admin/andamios/add-cargo/add-cargo.component';
import { ViewCargosComponent } from './pages/admin/andamios/view-cargos/view-cargos.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ReactiveFormsModule} from '@angular/forms';
import { EditCargosComponent } from './pages/admin/andamios/edit-cargos/edit-cargos.component';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import { MatTableExporterModule } from 'mat-table-exporter';
import { AddRolComponent } from './pages/admin/Usuarios/add-rol/add-rol.component';
import { EditRolComponent } from './pages/admin/Usuarios/edit-rol/edit-rol.component';
import { ViewRolComponent } from './pages/admin/Usuarios/view-rol/view-rol.component';
import { EditUsuarioComponent } from './pages/admin/Usuarios/edit-usuario/edit-usuario.component';
import { ViewUsuarioComponent } from './pages/admin/Usuarios/view-usuario/view-usuario.component';
import { AddUsuarioComponent } from './pages/admin/Usuarios/add-usuario/add-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriasComponent,
    AddCategoriaComponent,
    ViewExamenesComponent,
    AddExamenComponent,
    ActualizarExamenComponent,
    ViewExamenPreguntasComponent,
    AddPreguntaComponent,
    ActualizarPreguntaComponent,
    UserSidebar,
    LoadExamenComponent,
    InstruccionesComponent,
    StartComponent,
    AddCargoComponent,
    ViewCargosComponent,
    EditCargosComponent,
    AddRolComponent,
    EditRolComponent
,ViewRolComponent, EditUsuarioComponent, ViewUsuarioComponent, AddUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatTableExporterModule,


    MatLineModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
