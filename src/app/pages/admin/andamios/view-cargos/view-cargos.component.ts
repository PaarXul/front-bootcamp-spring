import {Component, OnInit, ViewChild} from '@angular/core';
import {CargosService} from "../../../../services/ModuloPersonas/cargos.service";
import Swal from "sweetalert2";
import {MatTableDataSource} from "@angular/material/table";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableExporterModule} from "mat-table-exporter";

@Component({
  selector: 'app-view-cargos',
  templateUrl: './view-cargos.component.html',
  styleUrls: ['./view-cargos.component.scss']
})
export class ViewCargosComponent implements OnInit{

  displayedColumns: string[] = ['codigo', 'nombre', 'descripcion', 'estado','acciones'];

  dataSource = new MatTableDataSource();

  cargos:any = [
    ]

  constructor(private cargoService:CargosService,
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
    this.cargoService.listarCargos().subscribe(
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
  cargoid = 0;
  exporter: any;

    eliminarCargo(id:number){
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
          this.cargoService.eliminarCargo(id).subscribe(
            (data) => {
              Swal.fire('Eliminado','El cargo ha sido eliminado con éxito','success').then(
                (e) => {
                  window.location.reload();
                }
              );
              this.cargos = this.cargos.filter((cargo:any) => cargo.cargoId != id)
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
