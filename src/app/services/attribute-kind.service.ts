import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const ROOT_URL = 'http://127.0.0.1:3000/attribute-kind';
@Injectable({
  providedIn: 'root',
})
export class AttributeKindService {
  constructor(private httpClient: HttpClient) {}

  findByChampion() {
    return this.httpClient.get(ROOT_URL + '/champion');
  }

  findByUltimate() {
    return this.httpClient.get(ROOT_URL + '/ultimate');
  }

  create(attributeKind){
    return this.httpClient.post(ROOT_URL, attributeKind);
  }
}
