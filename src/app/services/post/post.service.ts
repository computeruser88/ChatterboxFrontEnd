import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../../post';
import { Observable } from 'rxjs/Observable';
import { BrowserModule } from '@angular/platform-browser'

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  newPost(groupName: String, post: Post): Promise<Post> {
    const url2 = `http://ec2-35-153-102-77.compute-1.amazonaws.com:8080/project2/api/groups/${groupName}/posts`;
    let myHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http
      .post<Post>(url2, JSON.stringify(post), {headers: myHeader})
      .toPromise()
      .then(res => {return null})
      .catch(err => console.log(err))
  }

  getPostsByGroup(groupName: String): Observable<Post[]> {
    const groupUrl = `http://ec2-35-153-102-77.compute-1.amazonaws.com:8080/project2/api/groups/${groupName}/posts`;
    return this.http.get<Post[]>(`${groupUrl}`);
  }


}
