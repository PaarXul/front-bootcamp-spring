import {Component, OnInit} from '@angular/core';
import {CategoriaService} from "../../../../services/ModeloExamen/categoria.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.scss']
})
export class AddCategoriaComponent implements OnInit {

  categoria = {
    titulo : '',
    descripcion : ''
  }

  constructor(private categoriaService: CategoriaService, private snackBar: MatSnackBar, private router: Router) {

  }

  formSubmit() {
    if (this.categoria.titulo.trim() == '' || this.categoria.titulo == null) {
      this.snackBar.open('El titulo es requerido', '', {
        duration: 3000
      });
      return;
    }
    if (this.categoria.descripcion.trim() == '' || this.categoria.descripcion == null) {
      this.snackBar.open('La descripcion es requerida', '', {
        duration: 3000
      });
      return;


    }
    this.categoriaService.agregarCategoria(this.categoria).subscribe(
      (data: any) => {
        this.categoria.titulo = '';
        this.categoria.descripcion = '';
        Swal.fire('Categoria creada', 'La categoria se ha creado correctamente', 'success');
        this.router.navigate(['/admin/listar-categorias']);

      } , (error: any) => {
        Swal.fire('error', 'Error alguardar la categoria', 'error');

      });

  }

  ngOnInit(): void {
  }
}
