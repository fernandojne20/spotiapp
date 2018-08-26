import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  hola: boolean;

  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe( map(data => data['albums'].items));
  }

  searchArtists(artist: string) {

    return this.getQuery(`search?q=${artist}&type=artist`)
            .pipe( map(data => data['artists'].items));
  }

  searchArtist(id: string) {

    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
            .pipe( map(data => data['tracks']));
  }

  getQuery( query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBEkEmA2JKrNW4jO1rowevpgD7PskgaCsKgXvRgtvaetPMf8FTmwDlu7qbehkfppI8ldp_ZN7ILcRU_dLw'
    });

    return this.http.get(`https://api.spotify.com/v1/${ query }`, {headers});

  }
}
