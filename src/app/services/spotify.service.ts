import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(){
    
    return this.getQuery('browse/new-releases')
      .pipe( map(data => data['albums'].items));
  }

  searchArtist(artist:string){
    
    return this.getQuery(`search?q=${artist}&type=artist`)
            .pipe( map(data => data['artists'].items));
  }

  getQuery( query: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDmpF9rKBjB4PWUid0ovbl9Z_XX5WKLf5tE5z7ZQ9Jt_pnF3Sc5JaxYfS3ud46CVdTWRSwOKvBAQ0UTzcg'
    });

    return this.http.get(`https://api.spotify.com/v1/${ query }`, {headers})

  }
}
