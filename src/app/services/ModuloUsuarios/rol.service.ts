import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baserUrl from "../helper";
@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http:HttpClient) { }


  public listarRol(){
    return this.http.get(`${baserUrl}/rol/todos/`);
  }

  public agregarRol(rol:any){
    return this.http.post(`${baserUrl}/rol/`,rol);
  }

  public eliminarRol(rolId:any){
    return this.http.delete(`${baserUrl}/rol/${rolId}`);
  }

  public obtenerRol(rolId:any){
    return this.http.get(`${baserUrl}/rol/${rolId}`);
  }

  public actualizarRol(rol:any){
    return this.http.put(`${baserUrl}/rol/`,rol);
  }

  public obtenerRolPorNombre(nombre:any) {
    return this.http.get(`${baserUrl}/rol/nombre/${nombre}`);
  }
}
