import { Component, Input, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription'

import { ApiService } from './../../core/api.service'
import { AuthService } from './../../core/auth.service'

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styles: []
})
export class PlacesComponent implements OnDestroy {

  // TODO: Bar Model
  @Input() places: any
  optSub: Subscription
  loggedIn: boolean
  active: string

  filters = {
    type: ['Name', 'Rating', 'People', 'Going'],
    name: ''
  }

  constructor(
    private api: ApiService,
    public auth: AuthService
  ) { }

  opting(place): void {
    const type = place.going ? 'optOut$' : 'optIn$'
    this.optSub = this.api
      [type](place.name)
      .subscribe(
        res => {
          place.people += place.going ? -1 : 1
          place.going = !place.going
        },
        err => {
          console.error(err)
        }
      )
  }

  sort(filter) {
    if (this.active !== filter) {
      this.active = filter
      const type = filter.toLowerCase()
      this.places.sort((a, b) => {
        if (a[type] < b[type]) {
          return type !== 'rating' ? -1 : 1
        }
        if (a[type] > b[type]) {
          return type !== 'rating' ? 1 : -1
        }
        return 0
      })
    }
  }

  ngOnDestroy() {
    if (this.optSub) {
      this.optSub.unsubscribe()
    }
  }
}
