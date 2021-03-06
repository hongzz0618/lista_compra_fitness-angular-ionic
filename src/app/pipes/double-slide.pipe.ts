import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleSlide'
})
export class DoubleSlidePipe implements PipeTransform {

  transform( arr: any[] ): any[] {

    const doubleSlide = arr.reduce( (result, value, index, array) => {

      if ( index % 3 === 0) {
        result.push(array.slice(index, index + 3));
      }
      return result;
    }, []);

    return doubleSlide;
 }

}
