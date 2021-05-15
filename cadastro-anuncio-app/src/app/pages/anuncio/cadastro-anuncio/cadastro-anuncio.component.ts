import { Component, forwardRef, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';


export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CadastroAnuncioComponent),
  multi: true
};


@Component({
  selector: 'app-cadastro-anuncio',
  templateUrl: './cadastro-anuncio.component.html',
  styleUrls: ['./cadastro-anuncio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CadastroAnuncioComponent implements OnInit {
  
  myForm: FormGroup;


  numberMask = createNumberMask({
    integerLimit: 7
  })

  ngOnInit() {
    this.myForm = new FormGroup({    
      nomeAnuncio: new FormControl(),
      cliente: new FormControl(),
      dataInicio: new FormControl(new Date()),
      dataTermino: new FormControl(new Date()),
      valorInvestido: new FormControl()
    });

    this.myForm.valueChanges.subscribe(console.log);
 
  }

  onSubmit() { }


  limparForm() {
    this.ngOnInit();
  }

}