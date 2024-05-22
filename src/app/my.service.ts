import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { map } from "rxjs/operators";
import { User } from './user';
import { Albums } from './albums';
@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http: HttpClient){ }


  getUsers(): Observable<User[]> {
    console.log('Fetching users from API...');
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/albums").pipe(
      map(data => {
        console.log('Raw data from API:', data);
        return data.map(user => new User(user.userId, user.id, user.title));
      })
    );
  }


  getAlbums(): Observable<Albums[]> {
    console.log('Fetching albums from API...');
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/albums").pipe(
      map(data => {
        console.log('Raw data from API:', data);
        const albums = data.map(album => new Albums(album.id, album.title));
        console.log('Transformed data:', albums);
        return albums;
      })
    );
  }
}
