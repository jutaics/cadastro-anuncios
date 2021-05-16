import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anuncio } from 'src/app/pages/anuncio/anuncio';


@Injectable({
  providedIn: 'root',
  
})
export class AnuncioService {

  constructor(private http: HttpClient) {

  }

  salvar(cadastroAnuncio: Anuncio): Observable<Anuncio> {
    return this.http.post<Anuncio>('http://localhost:8080/api/anuncios',cadastroAnuncio);

  }

  getAnuncio(): Anuncio {
    let anuncio: Anuncio = new Anuncio();
    anuncio.cliente = "Teste Jutai";
    anuncio.nomeAnuncio = "Rede Globo 15/05/2021";
    anuncio.dtInicio = "12/05/2021";
    anuncio.dtTermino = "15/08/2021";
    anuncio.investimentoPorDia = 12.5;
    return anuncio;

  }

}
