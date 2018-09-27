import { Injectable } from '@angular/core';
import { AuthService} from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../user';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

  public user: any;
  url = "http://ec2-35-153-102-77.compute-1.amazonaws.com:8080/project2/api/users";
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
