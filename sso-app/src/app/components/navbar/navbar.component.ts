import {Component, OnInit} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from "../../sso-config";
import {JwksValidationHandler} from "angular-oauth2-oidc-jwks";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{

  name: string = "";

  constructor(private oAuthService : OAuthService) {}

  ngOnInit(): void {
    this.configureSingleSignOn();
    const userClaims: any = this.oAuthService.getIdentityClaims();
    this.name = userClaims.name ? userClaims.name : "";
  }

  configureSingleSignOn(){
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(){
    this.oAuthService.initCodeFlow();
  }

  logout(){
    this.oAuthService.logOut();
  }

  get token(){
    let  claims: any = this.oAuthService.getIdentityClaims();
    return claims ? claims: null;
  }
}
