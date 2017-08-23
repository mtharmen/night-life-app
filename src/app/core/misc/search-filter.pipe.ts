import { Pipe, PipeTransform } from '@angular/core';

import { Place } from './../models/place.model'

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(places: Place[], filter: string): any {
    return places.filter(place => place['name'].toLowerCase().indexOf(filter) > -1)
  }
}
