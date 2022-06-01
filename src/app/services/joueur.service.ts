import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Joueur } from '../models/joueur';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  apiUrl = environment.api + "players";

  constructor(private httpClient : HttpClient) { }

  getAll():Observable<Joueur[]>{
    return this.httpClient.get<Joueur[]>(this.apiUrl)
  }

  getById(id:number):Observable<Joueur>{
    return this.httpClient.get<Joueur>(this.apiUrl + '/' + id)
  }

  add(joueur:Joueur): Observable<Joueur>{
    return this.httpClient.post(this.apiUrl, joueur);
  }

  delete(id:number):Observable<Joueur>{
    return this.httpClient.delete(this.apiUrl + '/' +id)
  }
}
