import {ViewportScroller} from '@angular/common';
import {Component, HostListener, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
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
  pageYOffset: number;

  // Event to anable the scroll to top linked to the function scrollToTop
  @HostListener('window:scroll', ['$event']) onScroll() {
    this.pageYOffset = this.window.scrollY;
  }

  constructor(
    private titleService: Title,
    private companyService: CompanyService,
    private scroll: ViewportScroller,
    private window: Window
  ) {
    this.openedNewSearchMenu = false;
    this.requestInfo = this.companyService.requestInfo;
    this.pageYOffset = 0;
  }

  // Receive false boolean from formulaire component (when submitted) to set openedNewSearchMenu to false
  receiveBooleanToCloseNewSearchPanel($event: any) {
    this.openedNewSearchMenu = $event;
  }

  // Replace X with the length of the cards array
  ngOnInit() {
    this.requestInfo = this.companyService.requestInfo;
  }

  // Show / hide the new mobile search pane
  openNewSearchMenu() {
    this.openedNewSearchMenu = !this.openedNewSearchMenu;
  }

  // Set page title
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  // Go to next page
  goToNextPage() {
    this.companyService.getNextCompagnies();
  }

  // Go to previous page
  goToPreviousPage() {
    this.companyService.getPreviousCompagnies();
  }

  // Allow to scroll to top on click
  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }
}
