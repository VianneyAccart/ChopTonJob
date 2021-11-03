import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';


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

  // Remplacer X par la longueur du tableau cards
  ngOnInit(): void {
<<<<<<< HEAD
    this.setTitle(`X entreprises correspondent à votre recherche !`)
=======
    this.setTitle('X entreprises correspondent à votre recherche !');
>>>>>>> 50893d60047ed6ef7b58fa7eb0f0da6fad7b87d8
  }

  // Permet d'afficher/masquer le volet de nouvelle recherche sur mobile
  openNewSearchMenu() {
    this.openedNewSearchMenu = !this.openedNewSearchMenu;
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
