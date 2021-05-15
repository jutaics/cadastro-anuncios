import { formatDate } from '@angular/common';
import { Component, forwardRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CadastroAnuncioComponent),
  multi: true
};


@Component({
  selector: 'app-cadastro-anuncio',
  templateUrl: './cadastro-anuncio.component.html',
  styleUrls: ['./cadastro-anuncio.component.css']
})
export class CadastroAnuncioComponent implements OnInit {
  

  myForm: FormGroup;

  // máscara de data
  //https://stackblitz.com/edit/masking-material-date-picker-vt3wwz?file=app%2Fdatepicker-overview-example.html


  // máscara de moeda
  // https://stackblitz.com/edit/currency-mask-bug?file=app%2Fapp.component.ts
  constructor(private _fb: FormBuilder) {

  }

  numberMask = createNumberMask({
    integerLimit: 7
  })

  ngOnInit() {
    this.myForm = new FormGroup({
       
      valorInvestido: new FormControl(),  
      dataTermino: new FormControl()
    });

    this.myForm.valueChanges.subscribe(console.log);
 
  }


  // início implementação da máscara da data

  public mask = {
    guide: true,
    showMask: true,
    // keepCharPositions : true,
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  };

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): Date {
    return this.myForm.controls.dataTermino.value;
  };

  //set accessor including call the onchange callback
  set value(v: Date) {

    v = new Date(v);

    if (v !== this.myForm.controls.dataTermino.value) {
      this.myForm.controls.dataTermino.setValue( v.toLocaleDateString('pt-BR', {timeZone: 'UTC'}));
    }
  }

  //Occured value changed from module
  writeValue(value: any): void {

    value = new Date(value);

    if (value !== this.myForm.controls.dataTermino.value) {
      this.myForm.get('dataTermino').setValue( value.toLocaleDateString('pt-BR', {timeZone: 'UTC'}));
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  onChange(event) {
    console.log(event)
    // console.log(event);
    event = new Date(event);
    this.myForm.get('dataTermino').setValue( event.toLocaleDateString('pt-BR', {timeZone: 'UTC'}));
    this.onBlur();
  }

  todate(value) {

    value = new Date(value);

    this.myForm.get('dataTermino').setValue(new Date(value.toLocaleDateString('pt-BR', {timeZone: 'UTC'})));
  }

  onBlur() {
    if (this.myForm.controls.dataTermino) {
      this.onChangeCallback(this.myForm.controls.dataTermino);
    }
  }

  // fim implementação da máscara da data


  onSubmit() { }


  limparForm() {
    this.ngOnInit();
  }

}