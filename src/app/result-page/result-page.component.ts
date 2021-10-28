import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css'],
})
export class ResultPageComponent implements OnInit {
  openedNewSearchMenu;

  constructor(private titleService: Title) {
    this.openedNewSearchMenu = false;
  }

  ngOnInit(): void {
    this.setTitle("Résultat de recherche : les entreprises qui recrutent autour de chez vous !")
  }

  // Permet d'afficher/masquer le volet de nouvelle recherche sur mobile
  openNewSearchMenu() {
    this.openedNewSearchMenu = !this.openedNewSearchMenu;
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
