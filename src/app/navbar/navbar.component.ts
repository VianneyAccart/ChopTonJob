import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
