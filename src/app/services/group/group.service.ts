import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Group } from '../../group';

@Injectable()
export class GroupService {

  url = 'http://ec2-52-201-241-252.compute-1.amazonaws.com:8080/p2-mvc-0.0.1-SNAPSHOT/api/groups';
  
  constructor(private http: HttpClient) { }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.url}`);
  }

  newGroup(group: Group): Observable<Group> {
    const url2 = 'http://ec2-52-201-241-252.compute-1.amazonaws.com:8080/p2-mvc-0.0.1-SNAPSHOT/api/groups';
    let headers = new HttpHeaders({
      'Content-Type': '/json',
      'Cache-Control': 'no-cache'
    });

    return this.http.post<Group>(url2, group, { headers });
  }
}
