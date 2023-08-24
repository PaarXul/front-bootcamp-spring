import {Component, OnInit, ViewChild} from '@angular/core';
import Swal from "sweetalert2";
import {RolService} from "../../../../services/ModuloUsuarios/rol.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableExporterModule} from "mat-table-exporter";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-view-rol',
  templateUrl: './view-rol.component.html',
  styleUrls: ['./view-rol.component.scss']
})

export class ViewRolComponent implements OnInit{

  displayedColumns: string[] = ['id','nombre','acciones'];

  dataSource = new MatTableDataSource();

  cargos:any = [
  ]

  constructor(private rolService:RolService,
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
    this.rolService.listarRol().subscribe(
      (dato:any) => {
        this.cargos = dato;
        this.dataSource.data = this.cargos;
        console.log(this.cargos);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar los cargos','error');
      }
    )


  }
  rolid = 0;
  exporter: any;

  eliminarRol(id:number){
    Swal.fire({
      title: '¿Está seguro de continuar?',
      text: "El cargo será eliminado del sistema",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Eliminar'

    }).then((result) => {
      if (result.isConfirmed) {
        this.rolService.eliminarRol(id).subscribe(
          (data) => {
            Swal.fire('Eliminado','El cargo ha sido eliminado con éxito','success').then(
              (e) => {
                window.location.reload();
              }
            );
            this.cargos = this.cargos.filter((rol:any) => rol.rolId != id)
          },
          (error) => {
            Swal.fire('Error en el sistema','No se ha podido eliminar el cargo','error');
            console.log(error);
          }
        )
      }

    })
  }



}
