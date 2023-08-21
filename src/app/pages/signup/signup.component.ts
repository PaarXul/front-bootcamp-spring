import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/ModuloLogin/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public user = {
    username : '',
    password : '',
    nombre : '',
    apellido : '',
    email : '',
    telefono : ''
  }

  constructor(private userService:UserService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if (this.user.username=='' || this.user.username==null) {
      this.snack.open('El nombre de usuario es requerido!!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    this.userService.anadirUsuario(this.user).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire('Usuario creado con exito', 'Usuario creado con exito', 'success');

      },
      (error)=>{
        this.snack.open('Ha Ocurrido un error en el sistema!!', 'Aceptar', {
          duration: 3000

        });
      })

  }




}
