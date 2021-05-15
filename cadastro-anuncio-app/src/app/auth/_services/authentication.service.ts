import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IdentityStorage } from '../_models/identity.storage';
import { Observable, BehaviorSubject } from 'rxjs';
import { Identity } from '../_models/identity';
import { LocalStorageService } from 'angular-web-storage';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario/usuario.service';


class AuthorityResponse {
    public authority: string;
}

class UserPerfilResponse {
    public nome: string;
    public descricao: string;
    public email: string;
    public comarca: string;
    public lotacao: string;
    public cargo: string;
    public cpf: string;
}

class UserDataResponse {
    public id: string;
    public nome: string;
    public perfis: UserPerfilResponse[];
}

class AuthenticationResponse {
    public login: string;
    public token: string;
    public user: UserDataResponse;
    public authorities: AuthorityResponse[];
}

class AuthenticationResult {
    ok: boolean;
    message: string;

    constructor(ok: boolean, message: string) {
        this.ok = ok;
        this.message = message;
    }
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    baseUrl = environment.url;

    private messageSource = new BehaviorSubject(false);

    public message = this.messageSource.asObservable();

    constructor(
        private http: HttpClient,
        private usuarioService: UsuarioService,
        public identityStorage: IdentityStorage,
        public local: LocalStorageService,
        private router: Router,
        private toasterService: ToasterService,
    ) {
    }

    authenticate(login: string, password: string): Observable<AuthenticationResult> {

        const credentials = JSON.stringify({login: login, password: password});

        return this.http.post<AuthenticationResponse>(this.baseUrl + 'api/login', credentials)
            .map(resp => {
                if (resp.token) {
                    const token = resp.token;
                    const id = resp.user.id;
                    const userName = resp.user.nome;
                    const userLogin = resp.login;
                    const perfil = this.getPerfis(resp.user.perfis);
                    this.local.set('idUsuario', id);
                    if (token) {
                        const userAuthData = {
                            token: token,
                            userName: userName,
                            id: id,
                            perfil: perfil
                        };
                        console.log(`Usuário autenticou: Nome: ${userName}`);
                        this.identityStorage.saveAuthData(userAuthData);
                        this.messageSource.next(true);
                        this.usuarioService.salvar(id, userLogin, userName).subscribe(() => {
                            console.log('Verificado');
                        });
                        return new AuthenticationResult(true, null);
                    }
                } else {
                    this.messageSource.next(false);
                    return new AuthenticationResult(false, 'Login ou Senha Inválidos');
                }
        });
    }

    isExpired() {
        this.usuarioService.sessao().subscribe(_ => {}, _ => {
            this.toasterService.pop('error', 'A sessão expirou, por favor realize o login.');
            this.identityStorage.clearAuthData();
            this.router.navigate(['login']);
        });
    }


    getIdentity(): Identity {
        return this.identityStorage.getIdentity();
    }

    isAuthenticated(): boolean {
        return this.identityStorage.authenticationPresent();
    }

    clearAuthentication(): void {
        this.identityStorage.clearAuthData();
    }

    getPerfis(perfis: Array<UserPerfilResponse>) {
        let perfilArray = '';
        if (perfis != null) {
            perfis.forEach(element => {
                perfilArray += element.nome + ',';
            });
        }
        return perfilArray;
    }

    isAdminSistema(): boolean {
        let retorno = false;
        this.getIdentity().perfil.split(',').forEach(element => {
            if (element === 'ADMINISTRADOR') {
                retorno = true;
            }
        });
        return retorno;
    }
}
