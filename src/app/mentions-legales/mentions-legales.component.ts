import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-mentions-legales',
  templateUrl: './mentions-legales.component.html',
  styleUrls: ['./mentions-legales.component.css'],
})
export class MentionsLegalesComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.setTitle('Découvrez nos mentions légales !');
  }

  // Set page title
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
