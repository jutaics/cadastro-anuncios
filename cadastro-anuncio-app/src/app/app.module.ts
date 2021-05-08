import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { CadastroAnuncioComponent } from './cadastro-anuncio/cadastro-anuncio.component';
import { CadastroAnuncioService } from './cadastro-anuncio.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroAnuncioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule

  ],
  providers: [
    CadastroAnuncioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
