import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  openedMobileMenu:boolean
  imageSource: string

  constructor() { 
    this.openedMobileMenu = false
    this.imageSource = "assets/img/logo.png"
  }

  mobileMenu() {
    this.openedMobileMenu = !this.openedMobileMenu
  }

  ngOnInit(): void {
  }

}
