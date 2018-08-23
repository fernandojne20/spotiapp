import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any;
  topTracks: any[];
  loadingArtist: boolean = true;
  constructor( private route: ActivatedRoute, private spotifySrv: SpotifyService) { 

    this.route.params.subscribe( params => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    })
  }

  getArtist(id: string) {
    this.loadingArtist = true;
    this.spotifySrv.searchArtist(id)
      .subscribe( _artist => {
        this.artist = _artist;
        this.loadingArtist = false;
      });
  }
  getTopTracks(id: string) {
    this.spotifySrv.getTopTracks(id)
      .subscribe( _tracks => {
        this.topTracks = _tracks;
        console.log(_tracks);
        
      })
  }

}
