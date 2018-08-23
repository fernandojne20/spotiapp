import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() items: any[];
  constructor( private router: Router) { }

  findArtist( item: any ) {
    let artistId:any;
    console.log("item",item);
    
    if (item.type == 'artist'){
      artistId = item.id;
    }else{
      artistId = item.artists[0].id;
    }
    this.router.navigate(['artist', artistId]);
  }
}
