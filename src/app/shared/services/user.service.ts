import { HttpClient } from '@angular/common/http';
import { Injectable, effect, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Credentials, LogedInUser, User } from '../interface/user';

const API_URL = `${environment.apiURL}/user` 

@Injectable({
  providedIn: 'root'
})

export class UserService {

  http: HttpClient = inject(HttpClient)

  user = signal<LogedInUser | null>(null)
        //^^^ like observables,      ^^ initialized as null

  constructor() {
    effect(() => {
      if(this.user()) {
        console.log('User log in', this.user().fullname)
      } else {
        console.log('No user logged in')
      }
    })
  }

  registerUser(user: User) {
    return this.http.post<{msg: string}>(`${API_URL}/register`, user)
                            //^^ what the backend returns
  }
 
  check_duplicate_email(email: string) {
    return this.http.get<{msg: string}>(`${API_URL}/check_duplicate_email/${email}`)   // due to the implementation of the backend!!!
  }

  loginUser(credentials: Credentials) {
    return this.http.post<{access_token: string}>(`${API_URL}/login`, credentials)
  }


}
