import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../enviroments/enviroment";
import { UserModel } from "../models/user-model";

@Injectable({
  providedIn: 'root',
})
export class UserService {
    private url = environment.apiUrl + '/users';

    constructor(private http: HttpClient){}

    postUsername(username: string): Observable<UserModel> {
        return this.http.post<UserModel>(`${this.url}?username=${username}`, {});
    }

    getUsers(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(this.url);
    }

    getUserByName(username: string): Observable<UserModel> {
        return this.http.get<UserModel>(`${this.url}/${username}`);
    }
}