import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Service that calls AuthController in the API
 */
const AUTH_API = '/api/auth';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + '/signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user, selectedType, siret, numTel): Observable<any> {
    return this.http.post(AUTH_API + '/signup/' + siret, {
      username: user.username,
      password: user.password,
      role: ['user'],
      typeTransformateur: selectedType.libelle,
      numeroTelephone: numTel
    }, httpOptions);
  }
}
