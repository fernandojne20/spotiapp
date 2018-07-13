import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{

  constructor(private spotifySrv: SpotifyService) { }

  artistList: any[];
  loading: boolean;

  searchArtist(artist){
    this.loading = true;
    this.spotifySrv.searchArtist(artist)
    .subscribe((res:any) => {
      console.log(res);
      this.artistList = res;
      this.loading = false;
      
    });
  }
}
