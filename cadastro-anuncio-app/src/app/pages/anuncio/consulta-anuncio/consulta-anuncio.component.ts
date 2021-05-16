import { AnuncioService } from 'src/app/service/anuncio/anuncio.service';
import { Anuncio } from './../anuncio';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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

}
