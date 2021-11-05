import {Component} from '@angular/core';
import {Card} from '../shared/models/card-result.model';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
  providers: [NgbRatingConfig], // add NgbRatingConfig to the component providers
})
export class ResultListComponent {
  public buttonText = "Plus d'infos";
  currentRate = 3;

  // Bouton pour changer le texte à l'intérieur du bouton.
  buttonName(cards: Card[]): void {
    cards.forEach((e: any) => {
      if (e.companyIsShown === true) {
        this.buttonText = "Moins d'infos";
      } else {
        this.buttonText = "Plus d'infos";
      }
    });
  }

  // variable qui servira à stocker les valeurs pour chaque variable de chaque entreprise sous forme d'objets dans un tableau'.
  cards: Card[];

  isShown: boolean;

  displayInfo(card: Card) {
    card.companyIsShown = !card.companyIsShown;
  }

  constructor(config: NgbRatingConfig) {
    this.cards = [];
    // Personaliser la valeur max par défaut
    config.max = 5;
    config.readonly = true;

    this.isShown = false;
  }

  ngOnInit(): void {
    const tuanis = new Card(
      'TUANIS IT',
      'Conseil en systèmes et logiciels informatiques',
      '69760 Limonest',
      false,
      4,
      '20 à 49 salairés',
      '83489450300020',
      '0660767665',
      'Service des ressources humaines, 300 ROUTE NATIONALE 6, 69760 LIMONEST',
      '6201Z',
      'https://mailchi.mp/591a8fd7d4dc/tuanis-en-construction',
      false
    );
    const tdi = new Card(
      'TDI',
      'Edition de logiciels applicatifs',
      '69500 Bron',
      true,
      4,
      '20 à 49 salariés',
      '42186646800067',
      '0472040333',
      'Service des ressources humaines, 10 RUE EDISON, 69500 BRON',
      '5829C',
      'https://www.tdi-france.com/fr/',
      false
    );
    this.cards.push(tuanis, tdi);
  }
}
