import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  transparentNavbar: boolean;

  constructor(private titleService: Title) {
    this.transparentNavbar = true;
  }

  ngOnInit(): void {
    this.setTitle("Oups, la page que vous cherchez n'existe pas !");
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
