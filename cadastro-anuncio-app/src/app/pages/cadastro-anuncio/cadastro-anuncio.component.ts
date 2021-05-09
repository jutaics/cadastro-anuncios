import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector: 'app-cadastro-anuncio',
  templateUrl: './cadastro-anuncio.component.html',
  styleUrls: ['./cadastro-anuncio.component.css']
})
export class CadastroAnuncioComponent implements OnInit {

  myForm: FormGroup;

  numberMask = createNumberMask({
    integerLimit: 7
  })

  ngOnInit() {
    this.myForm = new FormGroup({

      // other version currently used in project
      valorInvestido: new FormControl()    
    });

    this.myForm.valueChanges.subscribe(console.log);
 
  }

  onSubmit() { }


  limparForm() {
    this.ngOnInit();
  }

}