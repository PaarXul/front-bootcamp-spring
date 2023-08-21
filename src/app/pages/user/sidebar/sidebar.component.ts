import {Component, OnInit} from '@angular/core';
import {CategoriaService} from "../../../services/ModeloExamen/categoria.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  implements OnInit {

  categories:any;

  constructor( private categoriaService:CategoriaService, private  snack:MatSnackBar) { }

    ngOnInit(): void {
      this.categoriaService.listarCategorias().subscribe(
        (data)=>{
          this.categories=data;

        }, (error) => {
          this.snack.open('Error al cargar las categorias', '', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom' });
        });



  }

}
