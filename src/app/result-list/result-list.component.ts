import {Component} from '@angular/core';
import {Card} from '../shared/models/card-result.model';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {CompanyService} from '../shared/services/company.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
  providers: [NgbRatingConfig], // add NgbRatingConfig to the component providers
})
export class ResultListComponent {
  // variable which will be used to store the values ​​for each variable of each company in the form of objects in an array
  cards: Card[] | undefined;
  isShown: boolean;

  constructor(config: NgbRatingConfig, private companyService: CompanyService) {
    this.cards = this.companyService.resultList;
    // Customize the default max value
    config.max = 5;
    config.readonly = true;
    this.isShown = false;
  }

  displayInfo(card: Card) {
    card.is_shown = !card.is_shown;
  }
}
