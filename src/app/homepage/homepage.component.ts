import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  transparentNavbar: boolean

  constructor() {
    this.transparentNavbar = true
  }

  ngOnInit(): void {
  }

}
