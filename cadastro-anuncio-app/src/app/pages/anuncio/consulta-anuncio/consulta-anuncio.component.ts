import { AnuncioService } from 'src/app/service/anuncio/anuncio.service';
import { Anuncio } from './../anuncio';
import { FormGroup } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var jsPDF: any;

@Component({
  selector: 'app-consulta-anuncio',
  templateUrl: './consulta-anuncio.component.html',
  styleUrls: ['./consulta-anuncio.component.css']
})
export class ConsultaAnuncioComponent implements OnInit {

  myForm: FormGroup;

  anuncios: Anuncio[] = [];
  colunas = ['nomeAnuncio', 'cliente', 'dtInicio', 'dtTermino', 'investimentoPorDia']

  constructor(private service: AnuncioService) { }

  ngOnInit(): void {
  }


  listarAnuncios() {
    this.service.list().subscribe(response => {
      this.anuncios = response;
    })
  }

  name = 'Angular';

  @ViewChild('content', {static: false}) content: ElementRef;


  public downloadPDF() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      width: 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('test.pdf');
  }

}
