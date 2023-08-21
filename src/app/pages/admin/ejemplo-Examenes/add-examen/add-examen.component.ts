import {Component, OnInit} from '@angular/core';
import {CategoriaService} from "../../../../services/ModeloExamen/categoria.service";
import Swal from "sweetalert2";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ExamenService} from "../../../../services/ModeloExamen/examen.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-examen',
  templateUrl: './add-examen.component.html',
  styleUrls: ['./add-examen.component.scss']
})
export class AddExamenComponent implements OnInit {

  categorias: any = [];

  examenData = {
    titulo: '',
    descripcion: '',
    puntosMaximos: '',
    numeroPreguntas: '',
    activo: true,
    categoria: {
      categoriaId: ''
    }
  }

  constructor(
    private categoriaService:CategoriaService,
    private snack:MatSnackBar,
    private examenService:ExamenService,
    private router:Router) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (data: any) => {
        this.categorias = data;
      }, (error: any) => {
        console.log(error);
        Swal.fire('error', 'Error al cargar las categorias', 'error');
      });
  }

  guardarCuestionario() {
    if (this.examenData.titulo.trim() == '' || this.examenData.titulo == null) {
      this.snack.open('El titulo es requerido', '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });

    return
  }
    this.examenService.agregarExamen(this.examenData).subscribe(
      (data: any) => {
        Swal.fire('Examen creado', 'Examen creado con exito', 'success');
        this.examenData={
          titulo: '',
          descripcion: '',
          puntosMaximos: '',
          numeroPreguntas: '',
          activo: true,
          categoria: {
            categoriaId: ''

          }
        }
        this.router.navigate(['/admin/examenes']);
      },
      (error) => {
        Swal.fire('Error','Error al guardar el examen','error');
      }
    )
  }

}
