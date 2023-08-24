import {Component, OnInit, ViewChild} from '@angular/core';
import Swal from "sweetalert2";
import {UsuarioService} from "../../../../services/ModuloUsuarios/usuario.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableExporterModule} from "mat-table-exporter";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";

@Component({
  selector: 'app-view-usuario',
  templateUrl: './view-usuario.component.html',
  styleUrls: ['./view-usuario.component.scss']
})
export class ViewUsuarioComponent implements OnInit{

  displayedColumns: string[] = ['run', 'nombre', 'apellido', 'email','telefono','enabled','acciones'];

  dataSource = new MatTableDataSource();

  usuario:any = [

  ]

  constructor(private usuarioService:UsuarioService,
              private _liveAnnouncer: LiveAnnouncer,
              private matExport:MatTableExporterModule
  ) { }


  @ViewChild(MatSort)
  sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit(): void {
    this.usuarioService.listarusuarios().subscribe(
      (dato:any) => {
        this.usuario = dato;
        this.dataSource.data = this.usuario;
        console.log(this.usuario);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar los usuario','error');
      }
    )


  }
  usuarioId = 0;
  exporter: any;

  eliminarusuario(id:number){
    Swal.fire({
      title: '¿Está seguro de continuar?',
      text: "El usuario será eliminado del sistema",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Eliminar'

    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.eliminarusuario(id).subscribe(
          (data) => {
            Swal.fire('Eliminado','El usuario ha sido eliminado con éxito','success').then(
              (e) => {
                window.location.reload();
              }
            );
            this.usuario = this.usuario.filter((usuario:any) => usuario.usuarioId != id)
          },
          (error) => {
            Swal.fire('Error en el sistema','No se ha podido eliminar el usuario','error');
            console.log(error);
          }
        )
      }

    })
  }



}
