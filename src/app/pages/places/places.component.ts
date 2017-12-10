import { Component, Input, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription'

import { ApiService } from './../../core/api.service'
import { AuthService } from './../../core/auth.service'

import { Place } from './../../core/models/place.model'

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styles: []
})
export class PlacesComponent implements OnDestroy {

  @Input() places: Place[]
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
          this.updatePlaces(place.name, !place.going)
          place.people += place.going ? -1 : 1
          place.going = !place.going
        },
        err => {
          console.error(err)
        }
      )
  }

  private updatePlaces(name, going): void {
    // TODO: figure out how to retrigger the pipes rather than updating the filtered list and the original list
    const i = this.places.findIndex(place => place.name === name)
    this.places[i].people += !going ? -1 : 1
    this.places[i].going = going
  }

  // TODO: Test this vs Pipe
  sort(filter) {
    if (this.active !== filter) {
      this.active = filter
    }
  }

  ngOnDestroy() {
    if (this.optSub) {
      this.optSub.unsubscribe()
    }
  }
}
