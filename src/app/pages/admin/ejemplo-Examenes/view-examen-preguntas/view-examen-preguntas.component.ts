import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PreguntaService} from "../../../../services/ModeloExamen/pregunta.service";
import Swal from "sweetalert2";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-view-examen-preguntas',
  templateUrl: './view-examen-preguntas.component.html',
  styleUrls: ['./view-examen-preguntas.component.scss']
})
export class ViewExamenPreguntasComponent implements OnInit {

  examenId:any;
  titulo:any;
  preguntas:any = [];

  constructor(private route:ActivatedRoute,private preguntaService:PreguntaService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.examenId = this.route.snapshot.params['examenId'];
    this.titulo = this.route.snapshot.params['titulo'];
    this.preguntaService.listarPreguntasDelExamen(this.examenId).subscribe(
      (data:any) => {
        this.preguntas = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  eliminarPregunta(preguntaId:any){
    Swal.fire({
      title: '¿Estás seguro?',
      text: "La pregunta será eliminada permanentemente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.preguntaService.eliminarPregunta(preguntaId).subscribe(
          (data) => {
            this.snack.open('Pregunta eliminada','',{
              duration: 1500,
              horizontalPosition: 'center',
              verticalPosition: 'bottom'

            });
            this.preguntas = this.preguntas.filter((pregunta:any) => pregunta.preguntaId != preguntaId)

          },(error) => {
            Swal.fire('Error','Error al eliminar la pregunta en la base de datos','error');
            console.log(error);
          }
        )
      }
    })
  }
}
