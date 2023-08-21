import {Component, OnInit} from '@angular/core';
import {ExamenService} from "../../../services/ModeloExamen/examen.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.scss']
})
export class InstruccionesComponent implements OnInit {

  examenId:any;
  examen:any = new Object();

  constructor(
    private examenService:ExamenService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.examenId = this.route.snapshot.params['examenId'];
    this.examenService.obtenerExamen(this.examenId).subscribe(
      (data:any) => {
        this.examen = data;
        console.log(this.examen);
      },
      (error) => {
        console.log(error);
      });

  }

  empezarExamen() {
    Swal.fire({title: '¿Estás seguro de empezar el examen, Nuevamente?', showCancelButton:true,
      confirmButtonText:'Sí, empezar', cancelButtonText:'No, cancelar',
    icon:'info'}).then((result) => {
      if (result.isConfirmed) { this.router.navigate(['/start/'+this.examenId]) }
      }
    )
  }




}
