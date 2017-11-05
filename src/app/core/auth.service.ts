// Used https://auth0.com/blog/real-world-angular-series-part-1/ as a reference
import { Injectable } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Subscription } from 'rxjs/Subscription'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/catch'

import { User } from './models/user.model'
import { SignUpModel } from './models/signup.model'

import { base_url } from './config'

@Injectable()
export class AuthService {
  loading: boolean
  loggedIn: boolean
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn)

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
  ) {
    const previous = localStorage.getItem('previousPath') // || '/'
    localStorage.removeItem('previousPath')
    if (previous !== null && this.location.path() !== '/error') {
      this.postTwitterLogin$()
        .subscribe(
          res => {
            this.loading = false
            this.storeUserInfo(res)
            this.router.navigateByUrl(previous)
          },
          err => {
            this.loading = false
          }
        )
    } else {
      if (this.validToken) {
        this.setLoggedIn(true)
      } else {
        this.removeUserInfo()
        this.router.navigateByUrl('/')
      }
    }
  }

  private get authHeader() {
    return `Bearer ${localStorage.getItem('access_token') || ''}`
  }

  private handleError(err: Response | any): Observable<any> {
    const errorMsg = err.error ? err.error.message : 'Unabled to complete request'
    return Observable.throw(errorMsg)
  }

  private postTwitterLogin$(): Observable<User[]> {
    return this.http
      .get(base_url + '/auth/get-user', {withCredentials: true})
      .catch(this.handleError)
  }

  twitterLogin(): void {
    this.setCurrentPath()
    // TODO: Is there a way to do this with angular?
    window.location.href = base_url + '/auth/twitter'
  }

  logout()  {
    this.removeUserInfo()
    // this.router.navigateByUrl('/')
    window.location.reload()
  }

  storeUserInfo(user) {
    localStorage.setItem('access_token', user.token)
    localStorage.setItem('exp', JSON.stringify(user.exp * 1000))
    localStorage.setItem('_id', user._id)
    localStorage.setItem('username', user.username)
    localStorage.setItem('role', user.role)
    const twitter = JSON.parse(user.twitter)
    localStorage.setItem('twitter_id', twitter.id || '')
    this.setLoggedIn(true)
  }

  redirectTo(redirect?: string): void {
    const redirectTo = redirect ? redirect : '/'
    if (redirectTo.indexOf('http:') > -1) {
      window.location.href = redirectTo
    }
    this.router.navigateByUrl(redirectTo)
  }

  private setLoggedIn(value: boolean) {
    this.loggedIn$.next(value)
    this.loggedIn = value
  }

  removeUserInfo(redirect?: string): void {
    localStorage.removeItem('access_token')
    localStorage.removeItem('exp')
    localStorage.removeItem('_id')
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    localStorage.removeItem('twitter_id')
    this.setLoggedIn(false)
  }

  setCurrentPath(): void {
    const previousPath = this.location.path()
    localStorage.setItem('previousPath', previousPath)
  }

  get validToken(): boolean {
    const expiration = JSON.parse(localStorage.getItem('exp'))
    return Date.now() < expiration
  }

  // TODO: Just assign to a variable instead?
  get isAdmin() {
    return localStorage.getItem('role') === 'admin'
  }

  get user_id() {
    return localStorage.getItem('_id')
  }

  get username() {
    return localStorage.getItem('username')
  }

  get twitter_id() {
    return localStorage.getItem('twitter_id')
  }
}
