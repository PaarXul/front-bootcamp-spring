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
    id: 0,
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
  usuarionombre = '';
  usuario:any ;

  ngOnInit(): void {
    this.usuarioId = this.route.snapshot.params['usuarioId'];
    this.usuarionombre = this.route.snapshot.params['nombre'];

    this.usuarioService.detalleusuarios(this.usuarioId).subscribe(
      (data) => {
        this.usuario = data;
        this.usuarioFG.value.id = this.usuario.usuarioId;
        this.usuarioFG.controls['nombre'].setValue(this.usuario.nombre);
        this.usuarioFG.controls['username'].setValue(this.usuario.username);
        this.usuarionombre = this.usuario.nombre;
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

  usuarioPost: any = {
    id: 0,
    nombre: '',
    username: '',
    enabled: true,
    run: '',
    apellido:'',
    email:'',
    password:'',
    telefono:''

};


  public actualizarDatos(){

    this.usuarioPost.id =  this.usuarioId;
    this.usuarioPost.nombre = this.usuarioFG.value.nombre;
    this.usuarioPost.username = this.usuarioFG.value.username;
    this.usuarioPost.enabled = this.usuarioFG.value.enabled;
    this.usuarioPost.run = this.usuarioFG.value.run;
    this.usuarioPost.apellido = this.usuarioFG.value.apellido;
    this.usuarioPost.email = this.usuarioFG.value.email;
    this.usuarioPost.password = this.usuarioFG.value.password;
    this.usuarioPost.telefono = this.usuarioFG.value.telefono;
    console.log("Usuario A Actualizar");
    console.log(this.usuarioPost);


    let usuario = {
      id: 0,
      nombre: this.usuarioFG.value.nombre?.trim(),
      enabled: this.usuarioFG.value.enabled,
      run: this.usuarioFG.value.run,
      username: this.usuarioFG.value.username,
      apellido:this.usuarioFG.value.apellido,
      email:this.usuarioFG.value.email,
      password:this.usuarioFG.value.password,
      telefono:this.usuarioFG.value.telefono,
    }

    usuario.id = this.usuario.usuarioId;

    if (usuario.nombre == '' || usuario.nombre == null) {
      this.snackBar.open('El nombre es requerido', '', {
        duration: 3000
      });
      return;
    }

    if (usuario.username == '' || usuario.username == null) {
      this.snackBar.open('La username es requerida', '', {
        duration: 3000
      });
      return;
    }
    if (usuario.run == '' || usuario.run == null) {
      this.snackBar.open('El run es requerido', '', {
        duration: 3000
      });
      return;
    }
    if (usuario.apellido == '' || usuario.apellido == null) {
      this.snackBar.open('El apellido es requerido', '', {
        duration: 3000
      });
      return;
    }
    if (usuario.email == '' || usuario.email == null) {
      this.snackBar.open('El email es requerido', '', {
        duration: 3000
      });
      return;
    }
    if (usuario.password == '' || usuario.password == null) {
      this.snackBar.open('El password es requerido', '', {
        duration: 3000
      });
      return;
    }
    if (usuario.telefono == '' || usuario.telefono == null) {
      this.snackBar.open('El telefono es requerido', '', {
        duration: 3000
      });
      return;
    }
    console.log(usuario);
    console.log(this.usuario);



    this.usuarioService.actualizarusuarios(this.usuarioPost).subscribe(

      (data) => {
        Swal.fire('usuario actualizado','El Usuario ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/admin/view-usuario']);
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
