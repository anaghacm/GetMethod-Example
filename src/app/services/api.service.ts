import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  getUsers(){
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  getPosts(){
    return this._http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
