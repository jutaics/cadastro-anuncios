import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-cadastro-anuncio',
  templateUrl: './cadastro-anuncio.component.html',
  styleUrls: ['./cadastro-anuncio.component.css'],

})
export class CadastroAnuncioComponent implements OnInit {

  registerForm: FormGroup;

  constructor() { }

  ngOnInit() { }


  onSubmit() {}


  limparForm() {
    this.ngOnInit();
  }

  public removerEspaco(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => formGroup.get(key).setValue(formGroup.get(key).value.trim()));
  }

}
