import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  resultArr: any[] = [];
  constructor(private httpService: HttpClient) { }

  search(input: string): Observable <any> {
    return this.httpService.get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=' + input);
  }
  getResultObj(id: number) {
    return this.httpService.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id);
  }
}
