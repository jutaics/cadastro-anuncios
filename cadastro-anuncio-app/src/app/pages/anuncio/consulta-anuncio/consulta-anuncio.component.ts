import { Anuncio } from 'src/app/pages/anuncio/anuncio';
import { AnuncioService } from 'src/app/service/anuncio/anuncio.service';
import { FormGroup } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MatDialog } from '@angular/material/dialog';
import { AnuncioDetalheComponent } from '../anuncio-detalhe/anuncio-detalhe.component';



@Component({
  selector: 'app-consulta-anuncio',
  templateUrl: './consulta-anuncio.component.html',
  styleUrls: ['./consulta-anuncio.component.css']
})
export class ConsultaAnuncioComponent implements OnInit {

  myForm: FormGroup;

  anuncios: Anuncio[] = [];
  colunas = ['nomeAnuncio', 'cliente', 'dtInicio', 'dtTermino', 'investimentoPorDia']

  constructor(private service: AnuncioService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
 

  listarAnuncios() {
    this.service.list().subscribe(response => {
      this.anuncios = response;
    })
  }

  name = 'Angular';

  @ViewChild('tabela', { static: false }) tabela: ElementRef;


  downloadPDF() {

    const div = document.getElementById('tabela');
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

  visualizarAnuncio(anuncio: Anuncio){
    this.dialog.open(AnuncioDetalheComponent, {
      width:'550px',
      height: '550px',
      data: anuncio
    })
  }
}
