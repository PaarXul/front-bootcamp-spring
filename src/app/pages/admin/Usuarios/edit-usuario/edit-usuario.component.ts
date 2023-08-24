import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../../../services/ModuloUsuarios/usuario.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent implements OnInit {



  usuarioFG = this.formBuilder.group({
    nombre: '',
    username: '',
    enabled: true,
    run: '',
    apellido:'',
    email:'',
    password:'',
    telefono:''
  })

  usuarioId = 0;
  usuario:any ;

  ngOnInit(): void {
    this.usuarioId = this.route.snapshot.params['usuarioId'];

    this.usuarioService.detalleusuarios(this.usuarioId).subscribe(
      (data) => {
        this.usuario = data;

        this.usuarioFG.controls['nombre'].setValue(this.usuario.nombre);
        this.usuarioFG.controls['username'].setValue(this.usuario.username);
        this.usuarioFG.controls['enabled'].setValue(this.usuario.enabled);
        this.usuarioFG.controls['run'].setValue(this.usuario.run);
        this.usuarioFG.controls['apellido'].setValue(this.usuario.apellido);
        this.usuarioFG.controls['email'].setValue(this.usuario.email);
        this.usuarioFG.controls['password'].setValue(this.usuario.password);
        this.usuarioFG.controls['telefono'].setValue(this.usuario.telefono);



        console.log(this.usuario);
      },
      (error) => {
        console.log(error);
      })
  }




  constructor(
    private route:ActivatedRoute,
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }


  public actualizarDatos(){

    let usuarios = {
      nombre: this.usuario.value.nombre?.trim(),
      enabled: this.usuario.value.enabled,
      run: this.usuario.value.run,
      username: this.usuario.value.username,
      apellido:this.usuario.value.apellido,
      email:this.usuario.value.email,
      password:this.usuario.value.password,
      telefono:this.usuario.value.telefono,
    }

    if (usuarios.nombre == '' || usuarios.nombre == null) {
      this.snackBar.open('El nombre es requerido', '', {
        duration: 3000
      });
      return;
    }

    if (usuarios.username == '' || usuarios.username == null) {
      this.snackBar.open('La username es requerida', '', {
        duration: 3000
      });
      return;
    }
    if (usuarios.run == '' || usuarios.run == null) {
      this.snackBar.open('El run es requerido', '', {
        duration: 3000
      });
      return;
    }
    if (usuarios.apellido == '' || usuarios.apellido == null) {
      this.snackBar.open('El apellido es requerido', '', {
        duration: 3000
      });
      return;
    }
    if (usuarios.email == '' || usuarios.email == null) {
      this.snackBar.open('El email es requerido', '', {
        duration: 3000
      });
      return;
    }
    if (usuarios.password == '' || usuarios.password == null) {
      this.snackBar.open('El password es requerido', '', {
        duration: 3000
      });
      return;
    }
    if (usuarios.telefono == '' || usuarios.telefono == null) {
      this.snackBar.open('El telefono es requerido', '', {
        duration: 3000
      });
      return;
    }

    this.usuarioService.actualizarusuarios(this.usuario).subscribe(


      (data) => {
        Swal.fire('usuario actualizado','El Usuario ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/admin/view-usuarios']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar el usuario','error');
        console.log(error);
      }
    )

  }




}
