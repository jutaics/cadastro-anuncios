import { ConsultaAnuncioComponent } from './consulta-anuncio/consulta-anuncio.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  @ViewChild(ConsultaAnuncioComponent) lista;

  constructor() { }

  listar(){
     this.lista.listarAnuncios();    
  }

  ngOnInit(): void {
  }

}
 