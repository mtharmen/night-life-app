import { Pipe, PipeTransform } from '@angular/core';

import { Place } from './../models/place.model'

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {
  transform(places: Place[], filter: string): any {
    filter = filter ? filter.toLowerCase() : undefined
    // ['Name', 'Rating', 'People', 'Going']\
    switch (filter) {
      case 'name':
        return places.sort((a, b) => a[filter] < b[filter] ? -1 : 1)
      case 'rating':
        return places.sort((a, b) => b[filter] - a[filter])
      case 'people':
        return places.sort((a, b) => a[filter] - b[filter])
      case 'going':
        return places.filter(place => place[filter])
      default:
        return places
    }
  }
}
