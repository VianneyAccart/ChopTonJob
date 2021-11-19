import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  // Change navbar style according to url
  url = '';
  date = new Date().getFullYear();
  isTransparent: boolean;

  constructor(private router: Router) {
    this.url = this.router.url;
    this.isTransparent = false;
  }

  changeFooterBackground() {
    if (this.url === '/' || this.url === '/404') {
      this.isTransparent = true;
    } else this.isTransparent = false;
  }

  ngOnInit() {
    this.changeFooterBackground();
  }
}
