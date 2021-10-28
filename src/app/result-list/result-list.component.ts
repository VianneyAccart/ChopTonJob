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
  currentRate = 2;

  // Bouton pour changer le texte à l'intérieur du bouton.
  buttonName():void{
    if (this.isCollapsed === true){
      this.buttonText = 'Plus d\'infos'
    }
    else {
      this.buttonText = 'Moins d\'infos'
    }
  }




  cards : Card[] 

  constructor(config: NgbRatingConfig) {
    this.cards = new Array(),
    // Personaliser la valeur max par défaut
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit(): void {
  }

}
