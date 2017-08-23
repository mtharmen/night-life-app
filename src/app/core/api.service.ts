import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/catch'

import { User } from './models/user.model'

import { base_url } from './config'

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private get authHeader(): string {
    return `Bearer ${localStorage.getItem('access_token') || ''}`
  }

  private handleError(err: Response | any): Observable<any> {
    const errorMsg = err.error ? err.error.message : 'Unabled to complete request'
    return Observable.throw(errorMsg)
  }

  getPlaces$(location: string): Observable<any> {
    return this.http
      .get(base_url + '/api/search/' + location, {
        headers: new HttpHeaders().set('Authorization', this.authHeader)
      })
      .catch(this.handleError)
  }

  optIn$(barName: string): Observable<any> {
    return this.http
      .put(base_url + '/api/add/' + barName, {}, {
        headers: new HttpHeaders().set('Authorization', this.authHeader)
      })
      .catch(this.handleError)
  }

  optOut$(barName: string): Observable<any> {
    return this.http
      .delete(base_url + '/api/remove/' + barName, {
        headers: new HttpHeaders().set('Authorization', this.authHeader)
      })
      .catch(this.handleError)
  }
}
