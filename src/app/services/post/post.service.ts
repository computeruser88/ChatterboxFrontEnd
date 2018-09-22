import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../post';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

  url = 'http://ec2-18-215-249-2.compute-1.amazonaws.com:8080/p2-mvc/api/posts/TestGroup';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}`);
    }
}
