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
  // Sert à changer le style de la navbar en fonction de l'url de la page.
  url = '';

  constructor(private router: Router) {
    this.openedMobileMenu = false;
    this.imageSource = 'assets/img/logo.png';
    this.url = this.router.url;
  }

  mobileMenu() {
    this.openedMobileMenu = !this.openedMobileMenu;
  }
}
