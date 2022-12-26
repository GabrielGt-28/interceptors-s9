import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeopleListService {
  _url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    console.log('PeopleListService');
  }

  getPeopleList() {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');

    return this.http.get(this._url, { headers: header });
  }
}
