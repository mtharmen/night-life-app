import { Component } from '@angular/core'

import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'

import { Subscription } from 'rxjs/Subscription'

import { AuthService } from './../core/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {

  isCollapsed = true

  constructor(
    public auth: AuthService
  ) { }

  open(): void {
    this.auth.twitterLogin()
  }

  logout(): void {
    this.auth.logout()
  }
}
