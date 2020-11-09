import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const ROOT_URL = 'localhost:3000/champions';
@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  constructor(private httpClient : HttpClient) { }

  
}
