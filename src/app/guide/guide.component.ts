import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {GuideCard} from '../shared/models/GuideCard.model';
import {GuideService} from '../shared/services/guide.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css'],
})
export class GuideComponent implements OnInit {
  etapes: GuideCard[];
  constructor(private titleService: Title, private guideService: GuideService) {
    this.etapes = [];
  }

  // Generate guideSteps and add them in the array 'etapes'
  ngOnInit(): void {
    this.guideService.getSteps().subscribe((response: any) => {
      this.etapes = response;
    });
    this.setTitle('Découvre comment réaliser une bonne candidature spontanée !');
  }

  // Set page title
  setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
  }
}
