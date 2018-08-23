import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'domSeguro'})
export class DomSeguroPipe implements PipeTransform {
  constructor(private domSanitazer: DomSanitizer) {
      
  }
  transform(value: any): any {
    const url = 'https://open.spotify.com/embed?uri=';
    return this.domSanitazer.bypassSecurityTrustResourceUrl(url+value);
  }
}