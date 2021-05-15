import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public version: string = environment.VERSION;

  public nomeEmpresa: string = 'Divulga Tudo';
  public endereco: string = "Av. Antônio Carlos Magalhães, 3148 - Caminho das Árvores, Salvador - BA, 40260-485"
  public ano: number = (new Date()).getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
