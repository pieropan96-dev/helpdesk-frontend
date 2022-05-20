import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credencial } from 'src/app/models/Credencial';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cred: Credencial = {
    email: '',
    senha: ''
  }

  email = new FormControl(null,Validators.email);
  senha = new FormControl(null,Validators.minLength(3));
  constructor() { }

  ngOnInit(): void {
  }

  desabilitarCampo(): boolean {
      if(!this.email.valid || !this.senha.valid){
        return true;
      }
      return false;
  }
}