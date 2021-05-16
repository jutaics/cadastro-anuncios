import { AnuncioService } from 'src/app/service/anuncio/anuncio.service';
import { Anuncio } from './../anuncio';
import { FormGroup } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


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


  downloadPDF() {

    const div = document.getElementById('content');
    const options = {
      background: 'white',
      scale: 3
    };

    html2canvas(div, options).then((canvas) => {

      var img = canvas.toDataURL("image/PNG");
      var doc = new jsPDF('l', 'mm', 'a4');

      const bufferX = 50; 
      const bufferY = 50;
      const imgProps = (<any>doc).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');

      return doc;
    }).then((doc) => {
      doc.save('relatorio_anuncio.pdf');  
    });
  }
}
