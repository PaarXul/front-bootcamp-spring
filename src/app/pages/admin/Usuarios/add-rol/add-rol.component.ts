import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {RolService} from "../../../../services/ModuloUsuarios/rol.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-rol',
  templateUrl: './add-rol.component.html',
  styleUrls: ['./add-rol.component.scss']
})
export class AddRolComponent implements OnInit {

  rol = this.formBuilder.group({
    nombre: ''
  })
  constructor(
    private rolService: RolService,
    private snackBar: MatSnackBar,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }
  formSubmit() {

    let rol = {
      nombre: this.rol.value.nombre?.trim()
    }

    if (rol.nombre == '' || rol.nombre == null) {
      this.snackBar.open('El nombre es requerido', '', {
        duration: 3000
      });
      return;
    }
    this.rolService.agregarRol(rol).subscribe(
      (data: any) => {
        rol.nombre = '';
        Swal.fire('Categoria creada', 'El rol se ha creado correctamente', 'success');
        this.router.navigate(['/admin/view-rol']);

      } , (error: any) => {
        Swal.fire('error', 'Error al guardar la rol', 'error');

      });

  }
  ngOnInit(): void {

  }

}
