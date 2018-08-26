import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(image: any[]): any {

    if (!image) {
      return 'assets/img/noimage.jpg';
    }

    if (image.length === 0) {
      return 'assets/img/noimage.jpg';
    }

    return image[0].url;
  }

}
