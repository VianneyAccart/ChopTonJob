import {Component} from '@angular/core';
import {Card} from '../shared/models/Card.model';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {CompanyService} from '../shared/services/company.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
  providers: [NgbRatingConfig], // add NgbRatingConfig to the component providers
})
export class ResultListComponent {
  // Variable which will be used to store the values ​​for each variable of each company in the form of objects in an array
  cards: Card[] | undefined;
  placeholderDisplayed = true; // Display placeholder instead of result list

  constructor(config: NgbRatingConfig, private companyService: CompanyService) {
    this.cards = this.companyService.resultList;
    // Param number of stars in rating
    config.max = 5;
    config.readonly = true;
  }

  // Is used to open/close the hidden div on each card.
  displayInfo(card: Card) {
    card.is_shown = !card.is_shown;
  }
}
