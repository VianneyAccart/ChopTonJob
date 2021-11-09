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

  // Replace X with the length of the cards array
  ngOnInit(): void {
    this.setTitle('2 entreprises correspondent à votre recherche !');
  }

  // Show / hide the new mobile search pane
  openNewSearchMenu() {
    this.openedNewSearchMenu = !this.openedNewSearchMenu;
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
