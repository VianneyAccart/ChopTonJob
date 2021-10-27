import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css'],
})
export class ResultPageComponent implements OnInit {
  openedNewSearchMenu;

  constructor() {
    this.openedNewSearchMenu = false;
  }

  ngOnInit(): void {}

  // Permet d'afficher/masquer le volet de nouvelle recherche sur mobile
  openNewSearchMenu() {
    this.openedNewSearchMenu = !this.openedNewSearchMenu;
  }
}
