import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {UsuarioService} from "../../../../services/ModuloUsuarios/usuario.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss']
})
export class AddUsuarioComponent implements OnInit {

  usuario = this.formBuilder.group({
    nombre: '',
    username: '',
    enabled: true,
    run: '',
    apellido:'',
    email:'',
    password:'',
    telefono:''
  })


  constructor(
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }


  formSubmit() {

    let usuario = {
      nombre: this.usuario.value.nombre?.trim(),
      enabled: this.usuario.value.enabled,
      run: this.usuario.value.run,
      username: this.usuario.value.username,
      apellido:this.usuario.value.apellido,
      email:this.usuario.value.email,
      password:this.usuario.value.password,
      telefono:this.usuario.value.telefono,
    }

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

    this.usuarioService.guardarusuarios(usuario).subscribe(
      (data: any) => {
        usuario.nombre= '';
          usuario.username='';
          usuario.enabled= true;
          usuario.run= '';
          usuario.apellido='';
          usuario.email='';
          usuario.password='';
          usuario.telefono='';
        Swal.fire('usuarios creada', 'El usuarios se ha creado correctamente', 'success');
        this.router.navigate(['/admin/view-usuario']);

      } , (error: any) => {
        Swal.fire('error', 'Error al guardar la usuarios', 'error');

      });

  }

  ngOnInit(): void {

  }



}
