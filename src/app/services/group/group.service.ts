import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Group } from '../../group';
// this service returns either a single group or all groups
@Injectable()
export class GroupService {

  url = 'http://192.168.61.233:8084/p2-mvc/api/groups';
  
  constructor(private http: HttpClient) { }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.url}`);
  }

  getSingleGroup(groupName: String): Observable<Group> {
    return this.http.get<Group>(`${this.url}/${groupName}`);
  }

  newGroup(group: Group): Observable<Group> {
    const url2 = 'http://192.168.61.233:8084/p2-mvc/api/groups';
    let headers = new HttpHeaders({
      'Content-Type': '/json',
      'Cache-Control': 'no-cache'
    });

    return this.http.post<Group>(url2, group, { headers });
  }
}
