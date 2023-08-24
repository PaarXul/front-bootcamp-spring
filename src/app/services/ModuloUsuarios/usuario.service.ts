import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baserUrl from "../helper";
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  public listarusuarios(){
    return this.http.get(`${baserUrl}/usuarios/todos/`);
  }

  public detalleusuarios(usuarioId:any){
    return this.http.get(`${baserUrl}/usuarios/id/${usuarioId}`)
  }


  public guardarusuarios(usuario:any){
    return this.http.post(`${baserUrl}/usuarios/`,usuario);
  }

  public actualizarusuarios(usuario:any){
    return this.http.put(`${baserUrl}/usuarios/actualizar/"`,usuario);
  }

  public eliminarusuario(usuarioId:any){

    return this.http.delete(`${baserUrl}/usuarios/${usuarioId}`);
  }
}
