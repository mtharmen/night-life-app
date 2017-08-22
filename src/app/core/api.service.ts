import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Subscription } from 'rxjs/Subscription'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/catch'

import { User } from './models/user.model'
import { ErrorService } from './misc/error.service'

import { base_url } from './config'

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private es: ErrorService
  ) { }

  private get authHeader(): string {
    return `Bearer ${localStorage.getItem('access_token') || ''}`
  }

  private handleError(err: Response | any): Observable<any> {
    const errorMsg = err.error ? err.error.message : 'Unabled to complete request'
    return Observable.throw(errorMsg)
  }

  setError(error): void {
    this.es.setError(error)
    console.error(error)
    // this.router.navigateByUrl('/error')
    window.location.href = base_url + '/error'
  }
}
