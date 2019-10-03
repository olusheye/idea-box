// import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { HttpRequest } from '@angular/common/http';
// @Injectable()
// export class AuthenticationService {
//   cachedRequests: Array<HttpRequest<any>> = [];
//   constructor(public jwtHelper: JwtHelperService) {}
//   public getToken(): string {
//     return localStorage.getItem('token');
//   }
//   public isAuthenticated(): boolean {
//     const token = this.getToken();
//     return !this.jwtHelper.isTokenExpired(token);
//   }
//   public collectFailedRequest(request: HttpRequest<any>): void {
//     this.cachedRequests.push(request);
//   }
//   public retryFailedRequests(): void {
//     // retry the requests. this method can
//     // be called after the token is refreshed
//   }
// }
