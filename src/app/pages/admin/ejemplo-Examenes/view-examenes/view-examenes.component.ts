import {Component, OnInit} from '@angular/core';
import {ExamenService} from "../../../../services/ModeloExamen/examen.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-view-examenes',
  templateUrl: './view-examenes.component.html',
  styleUrls: ['./view-examenes.component.scss']
})
export class ViewExamenesComponent implements OnInit{

  examenes: any= [

    ]
constructor(private examenService: ExamenService) {

}

  ngOnInit(): void {
    this.examenService.listarCuestionarios().subscribe(
      (data: any) => {
        this.examenes = data;
      }, (error: any) => {
        console.log(error);
        Swal.fire('error', 'Error al Cargar los examenes', 'error');
      }



    )


  }
  eliminarExamen(examenId: any) {
    Swal.fire({title:'Eliminar Examen', text:'¿Estas seguro de eliminar el examen?',
      icon:'warning', showCancelButton:true,confirmButtonColor:'#3085d6',cancelButtonColor:'#d33'
      ,confirmButtonText:'Si, eliminar',cancelButtonText:'Cancelar'})
      .then((result)=>{
      if(result.isConfirmed){
        this.examenService.eliminarExamen(examenId).subscribe(
          (data:any)=>{
            this.examenes = this.examenes.filter((examen:any)=>examen.examenId != examenId);
            Swal.fire('Examen eliminado', 'Examen eliminado con exito', 'success');
          },
          (error:any)=>{
            console.log(error);
            Swal.fire('Error', 'Error al eliminar el examen', 'error');

          });
      }
    })
  }


}
