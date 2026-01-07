import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../enviroments/enviroment";

@Injectable({
  providedIn: 'root',
})
export class UserService {
    private url = environment.apiUrl + '/user';

    constructor(private http: HttpClient){}

    postUsername(username: string): Observable<any> {
        return this.http.post(`${this.url}?username=${username}`, {});
    }

    getUsers(): Observable<any> {
        return this.http.get(this.url);
    }

    getUserByName(username: string): Observable<any> {
        return this.http.get(`${this.url}/${username}`);
    }
}