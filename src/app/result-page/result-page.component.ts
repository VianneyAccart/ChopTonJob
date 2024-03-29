import {ViewportScroller} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../shared/services/company.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css'],
})
export class ResultPageComponent implements OnInit {
  openedNewSearchMenu: boolean;
  totalCompanies: any | undefined;
  requestInfo: any;

  constructor(private companyService: CompanyService, private scroll: ViewportScroller) {
    this.openedNewSearchMenu = false;
    this.requestInfo = this.companyService.requestInfo;
  }

  // Receive false boolean from formulaire component (when submitted) to set openedNewSearchMenu to false
  receiveBooleanToCloseNewSearchPanel(isNewSearchPanelOpen: boolean) {
    this.openedNewSearchMenu = isNewSearchPanelOpen;
  }

  // Get elements for request from Company Service
  ngOnInit() {
    this.requestInfo = this.companyService.requestInfo;
  }

  // Show / hide the new mobile search pane
  openNewSearchMenu() {
    this.openedNewSearchMenu = !this.openedNewSearchMenu;
  }

  // Go to next page
  goToNextPage() {
    this.companyService.getNextCompagnies();
    this.scrollToTop();
  }

  // Go to previous page
  goToPreviousPage() {
    this.companyService.getPreviousCompagnies();
    this.scrollToTop();
  }

  // Allow to scroll to top on click
  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }
}
