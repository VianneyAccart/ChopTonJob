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
    this.guideService.getSteps().subscribe((response) => {
      this.etapes = response;
    });
    this.setTitle('Découvrez comment réaliser une bonne candidature spontanée !');
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
