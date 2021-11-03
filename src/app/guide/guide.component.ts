import {Component, OnInit} from '@angular/core';
import {cardsGuide} from '../shared/models/cardsGuide.model';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css'],
})
export class GuideComponent implements OnInit {
  etapes: cardsGuide[];
  constructor() {
    this.etapes = [];
  }
  //generate cardsGuide and push them in the array 'etapes'
  ngOnInit(): void {
    this.etapes.push(
      new cardsGuide(
        'Etape 1',
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        'assets/img/icons/calendarDateFill.svg',
        'Icone calendrier'
      ),
      new cardsGuide(
        'Etape 2',
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        'assets/img/icons/github.svg',
        'Icone Github'
      ),
      new cardsGuide(
        'Etape 3',
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        'assets/img/icons/linkedin.svg',
        'Icone linkedin'
      ),
      new cardsGuide(
        'Etape 4',
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        'assets/img/icons/fileText.svg',
        'Icone fichier'
      )
    );
  }
}
