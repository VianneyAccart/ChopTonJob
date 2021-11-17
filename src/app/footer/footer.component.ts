import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  // Change navbar style according to url
  url = '';
  date = new Date().getFullYear();

  constructor(private router: Router) {
    this.url = this.router.url;
  }
}
