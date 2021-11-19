import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  openedMobileMenu: boolean;
  imageSource: string;
  // Change navbar style according to url
  url = '';

  constructor(private router: Router) {
    this.openedMobileMenu = false;
    this.imageSource = 'assets/img/logo.png';
    this.url = this.router.url;
  }

  // Open and close mobile menu
  mobileMenu() {
    this.openedMobileMenu = !this.openedMobileMenu;
  }
}
