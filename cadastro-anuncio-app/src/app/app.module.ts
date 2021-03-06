import { CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { forwardRef, NgModule, LOCALE_ID } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { ToasterModule } from 'angular2-toaster';
import 'hammerjs';
import { BlockUIModule } from 'ng-block-ui';
import { RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { ChartsModule } from 'ng2-charts';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/_guards';
import { AuthInterceptor } from './auth/_guards/auth.interceptor';
import { AuthModule } from './auth/_guards/auth.module';
import { IdentityStorage } from './auth/_models/identity.storage';
import { AuthenticationService } from './auth/_services';
import { MaterialModule } from './material.module';
import { MatPaginatorIntlPortuguese } from './pages/table-format-page/mat-paginator-int';
import { FooterComponent } from './pages/template/footer/footer.component';
import { HeaderComponent } from './pages/template/header/header.component';
import { PadraoService } from './service/padrao/padrao.service';
import { UsuarioService } from './service/usuario/usuario.service';
import { AnuncioComponent } from './pages/anuncio/anuncio.component';
import { CadastroAnuncioComponent } from './pages/anuncio/cadastro-anuncio/cadastro-anuncio.component';
import { ConsultaAnuncioComponent } from './pages/anuncio/consulta-anuncio/consulta-anuncio.component';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { HelloComponent } from './hello.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatTabsModule } from '@angular/material/tabs';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCardModule } from '@angular/material/card';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DatePickerFormatDirective } from './utils/date-picker-format.directive';
import { AnuncioService } from './service/anuncio/anuncio.service';

import localePt from '@angular/common/locales/pt';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(localePt);


const globalSettings: RecaptchaSettings = { siteKey: '6Lc8vGwUAAAAAOsheXbsSd7qKpwLv0t2ECF1i___' };

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

registerLocaleData(ptBr, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AnuncioComponent,
    CadastroAnuncioComponent,
    ConsultaAnuncioComponent,
    HelloComponent,
    DatePickerFormatDirective
  ],
  imports: [   
    MatIconModule,
    BrowserModule,
    MaterialModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    BlockUIModule.forRoot(),
    ToasterModule.forRoot(),
    AuthModule,
    ChartsModule,
    NgxHmCarouselModule,
    RecaptchaModule,
    CurrencyMaskModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CurrencyMaskModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatCardModule,
    MatMomentDateModule
  ],
  providers: [
    PadraoService,
    IdentityStorage,
    AuthGuard,
    AuthenticationService,
    UsuarioService,
    AnuncioService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: RECAPTCHA_SETTINGS, useValue: globalSettings },
    { provide: MatPaginatorIntl, useClass: forwardRef(() => MatPaginatorIntlPortuguese) },
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide:  MatDatepickerModule, }  
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
