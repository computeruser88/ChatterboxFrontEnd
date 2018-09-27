// this service gets posts by group. the newPost function is not yet functional.

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../../post';
import { Observable } from 'rxjs/Observable';
import { BrowserModule } from '@angular/platform-browser';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  newPost(groupName: String, post: Post): any {
    fetch(`http://192.168.61.233:8084/p2-mvc/api/groups/${groupName}/posts`, {
      method: 'POST',
      body: JSON.stringify({
        "id": post.id,
        "title": post.title,
        "content": post.content,
        "imageUrl": post.imageUrl,
        "user": {
            "id": post.user.id,
            "nickname": post.user.nickname,
            "groups": post.user.groups
        },
        "group": {
            "id": post.group.id,
            "name": post.group.name,
            "users": post.group.users
        },
        "votes": post.votes,
        "comments": post.comments
    }),
    headers: {
      "Content-Type": "application/json"
  },
 
  }).then(function(res) { console.log(res) }).then(function(data) { console.log(data) })
  }

  getPostsByGroup(groupName: String): Observable<Post[]> {
    const groupUrl = `http://192.168.61.233:8084/p2-mvc/api/groups/${groupName}/posts`;
    return this.http.get<Post[]>(`${groupUrl}`);
  }


}
