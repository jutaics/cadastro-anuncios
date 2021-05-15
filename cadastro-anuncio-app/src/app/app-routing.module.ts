import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/_guards';
import { AnuncioComponent } from './pages/anuncio/anuncio.component';


const routes: Routes = [
  // Padrão para telas com base no perfil
  // { path: 'home', component: AnuncioComponent, canActivate: [AuthGuard] },  
  { path: '', component: AnuncioComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers: []
})
export class AppRoutingModule {

}
