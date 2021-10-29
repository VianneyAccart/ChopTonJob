import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  transparentNavbar: boolean

  constructor(private titleService: Title) {
    this.transparentNavbar = true
  }

  ngOnInit(): void {
    this.setTitle("Chop' Ton Job - Découvrez les entreprises qui recrutent autour de chez vous et décrochez le tech job de vos rêves")
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
