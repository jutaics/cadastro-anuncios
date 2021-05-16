import { ConsultaAnuncioComponent } from './../consulta-anuncio/consulta-anuncio.component';
import { Component, forwardRef, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnuncioService } from 'src/app/service/anuncio/anuncio.service';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { Anuncio } from '../anuncio';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import * as  moment from 'moment';



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

  listar: ConsultaAnuncioComponent;
  anuncio: Anuncio;
  dtInicio: string;
  minDate = new Date();

  constructor(private formBuilder: FormBuilder, private service: AnuncioService) {
    this.anuncio = new Anuncio();
  }

  numberMask = createNumberMask({
    integerLimit: 7
  })


  ngOnInit() {
    this.montarForm();
  }

  montarForm() {
    this.myForm = this.formBuilder.group({
      nomeAnuncio: new FormControl('', Validators.required),
      cliente: new FormControl('', Validators.required),
      dtInicio: new FormControl('', Validators.required),
      dtTermino: new FormControl('', Validators.required),
      investimentoPorDia: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (!this.myForm.valid) {
      Swal.fire({
        text: 'Preencha todos os campos para finalizar o cadastro',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        icon: 'info',
      });
      return;
    }
    const anuncio = new Anuncio();
    anuncio.cliente = this.myForm.get('cliente').value;
    anuncio.nomeAnuncio = this.myForm.get('nomeAnuncio').value;
    anuncio.dtInicio = this.myForm.get('dtInicio').value;
    anuncio.dtTermino = this.myForm.get('dtTermino').value;
    anuncio.dtInicio = moment(anuncio.dtInicio).locale('en').format('DD/MM/YYYY');
    anuncio.dtTermino = moment(anuncio.dtTermino).locale('en').format('DD/MM/YYYY');
    anuncio.investimentoPorDia = this.myForm.get('investimentoPorDia').value;

    this.service.salvar(anuncio).subscribe(response => {
      console.log(response);  
    })
    //this.limparForm();
  }


  limparForm() {
    //this.myForm.reset();
    this.ngOnInit();
  }

  validarDataTermino(event) {
    moment(event.targetElement.value, 'DD/MM/YYYY').locale('en-ca').format('L');
    console.log(event.targetElement.value);
    console.log(moment(event.targetElement.value, 'DD/MM/YYYY').isBefore(moment(this.dtInicio, 'DD/MM/YYYY')))
    if (moment(event.targetElement.value, 'DD/MM/YYYY').isBefore(moment(this.dtInicio, 'DD/MM/YYYY'))) {
      Swal.fire({
        text: 'Período Inválido',
        icon: 'error',
      });
      this.myForm.get('periodoFim').setValue('');
      return;
    }
  }

  validarDataInicio(event) {
    console.log(event.targetElement.value)
    this.dtInicio = event.targetElement.value;
  }


}