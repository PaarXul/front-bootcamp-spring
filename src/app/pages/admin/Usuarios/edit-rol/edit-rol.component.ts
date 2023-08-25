import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {RolService} from "../../../../services/ModuloUsuarios/rol.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-rol',
  templateUrl: './edit-rol.component.html',
  styleUrls: ['./edit-rol.component.scss']
})
export class EditRolComponent implements OnInit{

  constructor(
    private route:ActivatedRoute,
    private rolService:RolService,
    private router:Router,
  ) { }
  rolId = 0;
  rol:any ;
  rolNombre = '';

  rolPost: any = {
    id: 0,
    nombre: '',
  }


  ngOnInit(): void {
    this.rolId = this.route.snapshot.params['rolId'];

    this.rolService.obtenerRol(this.rolId).subscribe(
      (data) => {
        this.rol = data;

        this.rolPost.id = this.rol.id;
        this.rolPost.nombre = this.rol.nombre;

        this.rolNombre = this.rol.nombre;
        console.log(this.rol);
      },
      (error) => {
        console.log(error);
      })

  }


  public actualizarDatos(){
    console.log(this.rolPost);
    this.rolService.actualizarRol(this.rolPost).subscribe(


      (data) => {
        Swal.fire('rol actualizado','El Cargo ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/admin/view-rol']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar el rol','error');
        console.log(error);
      }
    )
  }





}
