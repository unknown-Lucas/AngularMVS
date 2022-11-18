import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Map } from '../models/maps/map';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private HTTP: HttpClient) { }

  getAllMaps(){
    return this.HTTP.get<Map[]>('http://localhost:3000/api/v1/maps')
  }
}
