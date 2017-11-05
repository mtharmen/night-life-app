import { Component, OnInit, OnDestroy } from '@angular/core'

import { Subscription } from 'rxjs/Subscription'

import { ApiService } from './../../core/api.service'
import { AuthService } from './../../core/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {

  placeSub: Subscription
  logSub: Subscription
  location: string
  places: any
  loading: boolean
  error: string
  active: string

  search = { value: '' }

  constructor(
    private api: ApiService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    const clear = JSON.parse(localStorage.getItem('clearLocation'))
    if (clear < Date.now()) {
      localStorage.removeItem('clearLocation')
      localStorage.removeItem('pastLocation')
    }
    this.location = localStorage.getItem('pastLocation') || ''
    this.logSub = this.auth.loggedIn$.subscribe(res => {
      // Page is loaded, but login status is uncertain
      if (res === undefined || (!res && this.places)) {
        return
      }
      if (this.location) {
        this.getPlaces()
      }
    })
  }

  getPlaces() {
    this.loading = true
    this.error = ''
    this.placeSub = this.api
      .getPlaces$(this.location)
      .subscribe(
        res => {
          this.loading = false
          this.places = res.bars
          this.location = res.location
        },
        err => {
          this.loading = false
          console.error(err)
          this.error = 'Error'
        }
      )
  }

  submit(location) {
    this.location = location
    console.log(location)
    localStorage.setItem('pastLocation', location)
    const expire = Date.now() + 1000 * 60 * 60 * 24
    localStorage.setItem('clearLocation', expire.toString())
    this.getPlaces()
  }

  ngOnDestroy() {
    this.placeSub.unsubscribe()
  }
}
