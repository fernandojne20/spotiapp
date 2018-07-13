import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  songsList: any[];
  loading: boolean;
  constructor(private spotifySrv: SpotifyService) {
    this.loading = true;
    this.spotifySrv.getNewReleases().subscribe((res:any) => {
      console.log(res);
      this.songsList = res;
      this.loading = false;
    });

   }

  ngOnInit() {
  }

}
