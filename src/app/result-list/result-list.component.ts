import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/models/card-result.model';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
  providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})
export class ResultListComponent implements OnInit {

  public isCollapsed = true;
  public buttonText: string = 'Plus d\'infos';
  currentRate = 3;

  // Bouton pour changer le texte à l'intérieur du bouton.
  buttonName():void{
    if (this.isCollapsed === true){
      this.buttonText = 'Plus d\'infos'
    }
    else {
      this.buttonText = 'Moins d\'infos'
    }
  }

  // variable qui servira à stocker les valeurs pour chaque variable de chaque entreprise sous forme d'objets dans un tableau'.
  cards : Card[] 

  constructor(config: NgbRatingConfig) {
    this.cards = new Array()
    // Personaliser la valeur max par défaut
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit(): void {
    const tuanis = new Card('TUANIS IT', 'Conseil en systèmes et logiciels informatiques', '69760 Limonest', false, 4, '20 à 49 salairés','83489450300020','0660767665', 'Service des ressources humaines, 300 ROUTE NATIONALE 6, 69760 LIMONEST','6201Z','https://mailchi.mp/591a8fd7d4dc/tuanis-en-construction')
    const tdi = new Card('TDI','Edition de logiciels applicatifs','69500 Bron',false,4,'20 à 49 salariés','42186646800067','0472040333','Service des ressources humaines, 10 RUE EDISON, 69500 BRON','5829C','https://www.tdi-france.com/fr/')
    this.cards.push(tuanis,tdi)
  }

}
