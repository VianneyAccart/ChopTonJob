import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("Oups, la page que vous cherchez n'existe pas !")
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  
}
