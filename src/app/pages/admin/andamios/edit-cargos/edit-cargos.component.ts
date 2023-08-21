import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CargosService} from "../../../../services/ModuloPersonas/cargos.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit-cargos',
  templateUrl: './edit-cargos.component.html',
  styleUrls: ['./edit-cargos.component.scss']
})
export class EditCargosComponent implements OnInit{

  constructor(
    private route:ActivatedRoute,
    private cargoService:CargosService,
    private router:Router,
  ) { }
    cargoId = 0;
    cargo:any ;


  ngOnInit(): void {
      this.cargoId = this.route.snapshot.params['cargoId'];

      this.cargoService.detalleCargo(this.cargoId).subscribe(
        (data) => {
          this.cargo = data;
          console.log(this.cargo);
        },
        (error) => {
          console.log(error);
        })

  }


    public actualizarDatos(){
      console.log(this.cargo);
        this.cargoService.actualizarCargo(this.cargo).subscribe(


            (data) => {
                Swal.fire('Examen actualizado','El Cargo ha sido actualizado con éxito','success').then(
                    (e) => {
                        this.router.navigate(['/admin/view-cargos']);
                    }
                );
            },
            (error) => {
                Swal.fire('Error en el sistema','No se ha podido actualizar el cargo','error');
                console.log(error);
            }
        )
    }





}
