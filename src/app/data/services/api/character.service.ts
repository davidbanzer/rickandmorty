import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../../interfaces/Character';
import { ApiResponse } from '../../interfaces/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl: string = 'https://rickandmortyapi.com/api';

  constructor(private httpClient: HttpClient) { }

  getCharacters(page?: number, name?: string, species?: string, gender?: string, status?: string ): Observable<ApiResponse<Character[]>>{
    let params = new HttpParams();
    if(page){
      params = params.append('page', page);
    }
    if(name){
      params = params.append('name', name);
    }
    if(species){
      params = params.append('species', species);
    }
    if(gender){
      params = params.append('gender', gender);
    }
    if(status){
      params = params.append('status', status);
    }
    return this.httpClient.get<ApiResponse<Character[]>>(this.apiUrl + '/character/', {params: params});
  }

  getCharacter(id: number){
    return this.httpClient.get(this.apiUrl + '/character/' + id);
  }



}
