import { Component, OnInit } from '@angular/core';
import { cardsGuide } from '../shared/models/cardsGuide.model';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css'],
})
export class GuideComponent implements OnInit {
  etapes: cardsGuide[];
  constructor() {
    this.etapes = new Array();
  }
  //generate cardsGuide and push them in the array 'etapes'
  ngOnInit(): void {
    const etape1 = new cardsGuide(
      'Etape 1',
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      'assets/img/icons/calendarDateFill.svg',
      'Icone calendrier'
    );
    const etape2 = new cardsGuide(
      'Etape 2',
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      'assets/img/icons/github.svg',
      'Icone Github'
    );
    const etape3 = new cardsGuide(
      'Etape 3',
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      'assets/img/icons/linkedin.svg',
      'Icone linkedin'
    );
    const etape4 = new cardsGuide(
      'Etape 4',
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      'assets/img/icons/fileText.svg',
      'Icone fichier'
    );

    this.etapes.push(etape1, etape2, etape3, etape4);
  }
}
