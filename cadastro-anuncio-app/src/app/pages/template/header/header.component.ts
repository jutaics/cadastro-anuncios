import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IdentityStorage } from '../../../auth/_models/identity.storage';
import { BaseComponent } from '../../base/base.component';
import { AuthenticationService } from '../../../auth/_services';
import { LocalStorageService } from 'angular-web-storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements BaseComponent, OnInit, OnDestroy {

  response: string;
  api: string;
  currentUser: any;
  flagHome = false;

  constructor(
    public router: Router,
    public http: HttpClient,
    public identityStorage: IdentityStorage,
    private authenticationService: AuthenticationService,
    private local: LocalStorageService,
  ) {}

  ngOnInit() {
  }

  loginTela() {
    this.router.navigate(['login']);
  }

  sairTela() {
    this.identityStorage.clearAuthData();
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }


  logado(): boolean {
      return this.router.url !== '/login';
  }

  ngOnDestroy() {
    return this.authenticationService.isAuthenticated();
  }

  telaHome() {
    this.router.navigate(['home']);
  }

}
