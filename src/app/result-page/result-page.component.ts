import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {CompanyService} from '../shared/services/company.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css'],
})
export class ResultPageComponent implements OnInit {
  openedNewSearchMenu: boolean;
  totalCompanies: any | undefined;

  constructor(
    private titleService: Title,
    private companyService: CompanyService,
    private actRoute: ActivatedRoute
  ) {
    this.openedNewSearchMenu = false;
    this.totalCompanies = this.companyService.totalResult;
    console.log(this.totalCompanies);
  }

  // Replace X with the length of the cards array
  ngOnInit() {
    this.setTitle(`${this.totalCompanies} entreprises correspondent à votre recherche !`);
  }

  // Show / hide the new mobile search pane
  openNewSearchMenu() {
    this.openedNewSearchMenu = !this.openedNewSearchMenu;
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
