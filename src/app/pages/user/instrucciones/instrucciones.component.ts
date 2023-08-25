import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.scss']
})
export class InstruccionesComponent implements OnInit {


  constructor(
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {

  }



}
