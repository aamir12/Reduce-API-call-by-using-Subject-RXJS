import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const BASE_URL = 'https://dummyapi.io/data/v1';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts`);
  }

  getPost(id) {
    return this.http.get<any>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}
