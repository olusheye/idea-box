// import 'rxjs/add/operator/do';
// import {
//   HttpRequest,
//   HttpInterceptor,
//   HttpHandler,
//   HttpEvent,
//   HttpResponse,
//   HttpErrorResponse
// } from '@angular/common/http';
// import { AuthenticationService } from '../../services/auth.service';
// import { Observable } from 'rxjs';
// import {tap } from 'rxjs/operators';
// export class JwtInterceptor implements HttpInterceptor {
//   constructor(public auth: AuthenticationService) {}
//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     return next.handle(request).do(
//       (event: HttpEvent<any>) => {
//         if (event instanceof HttpResponse) {
//           // do stuff with response if you want
//         }
//       },
//       (err: any) => {
//         if (err instanceof HttpErrorResponse) {
//           if (err.status === 401) {
//             this.auth.collectFailedRequest(request);
//           }
//         }
//       }
//     );
//   }
// }
