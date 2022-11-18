import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from 'src/app/core/models/characters/characterData';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private HTTP:HttpClient) { }

  getAllCharacter(){
    return this.HTTP.get<Character[]>('http://localhost:3000/api/v1/characters')
  }
}
