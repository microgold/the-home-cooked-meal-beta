import { Injectable } from '@angular/core';
import { User } from '../model/User.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Avatar } from '../model/Avatar.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  uribase = "http://localhost:5000/api";

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.uribase}/users`);
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.uribase}/user/${id}`);
  }

  getNextId(): Observable<number> {
        return this.httpClient.get<number>(`${this.uribase}/nextUserId`);
    }

  submitUser(user: User): Observable<Object> {
     console.log(`posting to ${this.uribase}/user`)
     const postObservable = this.httpClient.post(`${this.uribase}/user`, user);
     return postObservable;
     }


  submitUserPhoto(avatar: Avatar): Observable<any> {
    console.log(`posting to ${this.uribase}/user/${avatar.userId}/upload`);
    return this.httpClient.post(`${this.uribase}/user/${avatar.userId}/upload`, avatar);
    }


}
