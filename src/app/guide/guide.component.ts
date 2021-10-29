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
    const Etape1 = new cardsGuide(
      'Etape1',
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      'assets/img/icons/calendarDateFill.svg',
      'Icone calendrier'
    );
    const Etape2 = new cardsGuide(
      'Etape2',
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      'assets/img/icons/github.svg',
      'assets/img/icons/linkedin.svg'
    );
    const Etape3 = new cardsGuide(
      'Etape3',
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      'assets/img/icons/fileText.svg',
      'Icone fichier'
    );
    const Etape4 = new cardsGuide(
      'Etape4',
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    );

    this.etapes.push(Etape1, Etape2, Etape3, Etape4);
  }
}
