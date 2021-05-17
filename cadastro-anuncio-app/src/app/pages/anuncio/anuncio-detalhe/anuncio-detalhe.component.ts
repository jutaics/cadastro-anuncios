import { Anuncio } from 'src/app/pages/anuncio/anuncio';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-anuncio-detalhe',
  templateUrl: './anuncio-detalhe.component.html',
  styleUrls: ['./anuncio-detalhe.component.css']
})


export class AnuncioDetalheComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AnuncioDetalheComponent>,
    @Inject(MAT_DIALOG_DATA) public anuncio: Anuncio
  ) { }

  ngOnInit(): void {
  }
  fechar(){
    this.dialogRef.close();
  }

}
