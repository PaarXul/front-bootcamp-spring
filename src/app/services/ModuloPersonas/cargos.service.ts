import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baserUrl from "../helper";

@Injectable({
  providedIn: 'root'
})
export class CargosService {

  constructor(private http:HttpClient) { }

    public listarCargos(){
      return this.http.get(`${baserUrl}/cargos/todos`);
    }

    public listarCargosActivos(){
      return this.http.get(`${baserUrl}/cargos/activos`)
    }

    public listarCargosInactivos(){
      return this.http.get(`${baserUrl}/cargos/inactivos`)
    }

    public detalleCargo(cargoId:any){
      return this.http.get(`${baserUrl}/cargos/${cargoId}`)
    }

    public listarCargosPorNombre(nombre:any){
      return this.http.get(`${baserUrl}/cargos/${nombre}`);
    }

    public guardarCargo(cargo:any){
      return this.http.post(`${baserUrl}/cargos/`,cargo);
    }

    public actualizarCargo(cargo:any){
      return this.http.put(`${baserUrl}/cargos/`,cargo);
    }

    public eliminarCargo(cargoId:any){

      return this.http.delete(`${baserUrl}/cargos/${cargoId}`);
    }


}
