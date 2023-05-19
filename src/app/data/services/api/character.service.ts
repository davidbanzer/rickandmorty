import { HttpClient } from '@angular/common/http';
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

  getCharacters(page: number = 1): Observable<ApiResponse<Character[]>>{
    return this.httpClient.get<ApiResponse<Character[]>>(this.apiUrl + '/character/?page=' + page);
  }

  getCharacter(id: number){
    return this.httpClient.get(this.apiUrl + '/character/' + id);
  }

}
