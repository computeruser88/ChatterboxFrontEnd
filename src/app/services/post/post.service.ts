import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../../post';
import { Observable } from 'rxjs/Observable';
import { BrowserModule } from '@angular/platform-browser'

@Injectable()
export class PostService {

  url = 'http://ec2-52-91-214-208.compute-1.amazonaws.com:8080/p2-mvc-0.0.1-SNAPSHOT/api/groups/TestGroup/posts';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}`);
  }

  newPost(post: Post): Observable<Post> {
    const url2 = 'http://ec2-52-91-214-208.compute-1.amazonaws.com:8080/p2-mvc-0.0.1-SNAPSHOT/api/groups/TestGroup/posts';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
   
    return this.http.post<Post>(url2, post, {headers});
  }

}
