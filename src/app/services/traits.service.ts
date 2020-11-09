import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const ROOT_URL = 'http://127.0.0.1:3000/traits';
@Injectable({
  providedIn: 'root'
})
export class TraitsService {

  constructor(private httpClient : HttpClient) { }

  getAll(){
    return this.httpClient.get(ROOT_URL);
  }
}
