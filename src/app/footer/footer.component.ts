import { Component } from '@angular/core'

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer">
    <div class="container">
      <p><small>
        <a href="https://www.freecodecamp.com/challenges/build-a-nightlife-coordination-app" target="_blank">FCC Night Life App</a> | 
        <a href="https://github.com/mtharmen/night-life-app" target="_blank">GitHub Repo <i class="fa fa-github" aria-hidden="true"></i></a> | 
        <a href="http://fontawesome.io/" target="_blank">Font Awesome <i class="fa fa-font-awesome" aria-hidden="true"></i></a> | 
        <a href="https://www.yelp.com/" target="_blank">Search Results from Yelp <i class="fa fa-yelp" aria-hidden="true"></i></a>
      </small></p>
    </div>
  </footer>
  `,
  styles: [`
    .footer {
       text-align: center;
    }
  `]
})
export class FooterComponent {
  constructor() { }
}
