import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-transparent',
  templateUrl: './navbar-transparent.component.html',
  styleUrls: ['./navbar-transparent.component.css']
})
export class NavbarTransparentComponent implements OnInit {

  openedMobileMenu:boolean
  imageSource: string

  constructor() { 
    this.openedMobileMenu = false
    this.imageSource = ""
  }

  mobileMenu() {
    this.openedMobileMenu = !this.openedMobileMenu
  }

  ngOnInit(): void {
  }

}
