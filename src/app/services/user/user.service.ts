// this service gets the current user, and adds new users to the database

import { Injectable } from '@angular/core';
import { AuthService} from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../user';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

  public user: any;
  url = "http://192.168.61.233:8084/p2-mvc/api/users";
  constructor(private http: HttpClient) { 

  }

  getUser(id: String): Promise<User>{
    return this.http.get<User>(this.url+"/"+id)
      .toPromise();
  }

  addUser (user: User): Observable<User> {
    console.log("running addUser from user.service.ts");
    return this.http.post<User>(this.url, user);
  }
}
