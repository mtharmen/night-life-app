import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { ApiService } from './core/api.service'
import { AuthService } from './core/auth.service'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { LoadingComponent } from './core/misc/loading.component'
import { HomeComponent } from './pages/home/home.component'
import { AdminComponent } from './pages/admin/admin.component'
import { PlacesComponent } from './pages/places/places.component';
import { SearchFilterPipe } from './core/misc/search-filter.pipe';
import { TypeFilterPipe } from './core/misc/type-filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    LoadingComponent,
    PlacesComponent,
    SearchFilterPipe,
    TypeFilterPipe
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
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
