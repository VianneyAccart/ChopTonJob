import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  openedMobileMenu:boolean
  imageSource: string
  url: string = ""

  constructor(private router: Router) { 
    this.openedMobileMenu = false
    this.imageSource = "assets/img/logo.png"
    this.url = this.router.url
  }

  mobileMenu() {
    this.openedMobileMenu = !this.openedMobileMenu
  }

  ngOnInit(): void {
  }

}
