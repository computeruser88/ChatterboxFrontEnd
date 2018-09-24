import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../../post';
import { Observable } from 'rxjs/Observable';
import { BrowserModule } from '@angular/platform-browser'

@Injectable()
export class PostService {

  url = 'http://192.168.60.54:8082/p2-mvc/api/posts/TestGroup';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}`);
  }

  newPost(post: Post): Observable<Post> {
    const url2 = 'http://192.168.60.54:8082/p2-mvc/api/groups/TestGroup/posts';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
   
    return this.http.post<Post>(url2, post, {headers});
  }

}
