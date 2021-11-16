import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {cards} from '../shared/mocks/guideCards.mock';
import {GuideCard} from '../shared/models/GuideCard.model';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css'],
})
export class GuideComponent implements OnInit {
  etapes: GuideCard[];
  constructor(private titleService: Title) {
    this.etapes = [];
  }
  // Generate cardsGuide and add them in the array 'etapes'
  ngOnInit(): void {
    this.etapes = cards;
    this.setTitle('Découvrez comment réaliser une bonne candidature spontanée !');
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
