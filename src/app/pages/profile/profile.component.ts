import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/ModuloLogin/login.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  user:any = null;


  constructor(private loginService:LoginService) {
  }
  ngOnInit(): void {
    this.user = this.loginService.getUser();
  }

}
