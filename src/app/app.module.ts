import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { ApiService } from './core/api.service'
import { AuthService } from './core/auth.service'
import { ConfirmService } from './core/misc/confirm.service'
import { ErrorService } from './core/misc/error.service'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { LoadingComponent } from './core/misc/loading.component'
import { HomeComponent } from './pages/home/home.component'
import { AdminComponent } from './pages/admin/admin.component'
import { ConfirmComponent } from './core/misc/confirm.component';
import { ErrorComponent } from './core/misc/error.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    LoadingComponent,
    ConfirmComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    ApiService,
    ConfirmService,
    ErrorService
  ],
  entryComponents: [
    ConfirmComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
