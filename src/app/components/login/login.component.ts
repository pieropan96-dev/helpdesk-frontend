import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private toast: ToastrService) { }

  ngOnInit(): void {
  }

  logar(){
    this.toast.error('Usuário não encontrado!','Login')
    this.cred.senha = '';
    this.cred.email = '';
  }
  desabilitarCampo(): boolean {
      if(!this.email.valid || !this.senha.valid){
        return true;
      }
      return false;
  }
}