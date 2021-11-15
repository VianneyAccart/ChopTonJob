import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {CompanyService} from '../shared/services/company.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css'],
})
export class ResultPageComponent implements OnInit {
  openedNewSearchMenu: boolean;
  totalCompanies: number | undefined;

  constructor(private titleService: Title, private companyService: CompanyService) {
    this.openedNewSearchMenu = false;
  }

  // Replace X with the length of the cards array
  ngOnInit(): void {
    this.setTitle('2 entreprises correspondent à votre recherche !');
    this.totalCompanies = this.companyService.totalResult;
    console.log('totalcompanies' + this.totalCompanies);
    console.log('total result :' + this.companyService.totalResult);
  }

  // Show / hide the new mobile search pane
  openNewSearchMenu() {
    this.openedNewSearchMenu = !this.openedNewSearchMenu;
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
