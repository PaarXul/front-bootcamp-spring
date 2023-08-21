import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CargosService} from "../../../../services/ModuloPersonas/cargos.service";
import Swal from "sweetalert2";
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-add-cargo',
  templateUrl: './add-cargo.component.html',

  styleUrls: ['./add-cargo.component.scss']
})
export class AddCargoComponent implements OnInit {

  cargos = this.formBuilder.group({
    nombre: '',
    descripcion: '',
    estado: true,
    codigo: ''
  })


  constructor(
    private cargoService: CargosService,
    private snackBar: MatSnackBar,
    private router: Router,
    private formBuilder: FormBuilder
    ) {
  }


  formSubmit() {

    let cargo = {
      nombre: this.cargos.value.nombre?.trim(),
      descripcion: this.cargos.value.descripcion,
      estado: this.cargos.value.estado,
      codigo: this.cargos.value.codigo
    }




    if (cargo.nombre == '' || cargo.nombre == null) {
      this.snackBar.open('El nombre es requerido', '', {
        duration: 3000
      });
      return;
    }

    if (cargo.descripcion == '' || cargo.descripcion == null) {
      this.snackBar.open('La descripcion es requerida', '', {
        duration: 3000
      });
      return;
    }
    if (cargo.codigo == '' || cargo.codigo == null) {
      this.snackBar.open('El codigo es requerido', '', {
        duration: 3000
      });
      return;
    }



    this.cargoService.guardarCargo(cargo).subscribe(
        (data: any) => {
          cargo.nombre = '';
          cargo.descripcion = '';
          cargo.estado = true;
          cargo.codigo = '';
          Swal.fire('Categoria creada', 'El Cargo se ha creado correctamente', 'success');
          this.router.navigate(['/admin/view-cargos']);

        } , (error: any) => {
          Swal.fire('error', 'Error alguardar la categoria', 'error');

        });

  }

  ngOnInit(): void {

  }



}
