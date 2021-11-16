import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {TeamMember} from '../shared/models/TeamMember.model';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css'],
})
export class TeamPageComponent implements OnInit {
  members: TeamMember[];

  constructor(private titleService: Title) {
    this.members = [];
  }

  // Generate team members and push them in the array 'members'
  ngOnInit(): void {
    this.setTitle('Découvrez notre équipe !');
    this.members.push(
      new TeamMember(
        'Karim',
        'Boudjemai',
        'assets/img/karim.png',
        'Portrait Karim Boudjemai',
        'https://github.com/Kariim42',
        'https://www.linkedin.com/in/karim-boudjemai-%F0%9F%96%A5-87490b221/'
      ),
      new TeamMember(
        'Vianney',
        'Accart',
        'assets/img/vianney.png',
        'Portrait Vianney Accart',
        'https://github.com/VianneyAccart',
        'https://www.linkedin.com/in/vianneyaccart/'
      ),
      new TeamMember(
        'Camille',
        'Frelat',
        'assets/img/camille.png',
        'Portrait Camille Frelat',
        'https://github.com/camfrelat',
        'www.linkedin.com/in/camillefrelat'
      ),
      new TeamMember(
        'Adam',
        'Roux',
        'assets/img/adam.jpg',
        'Portrait Adam Roux',
        'https://github.com/AdamRoux',
        'https://www.linkedin.com/in/adamroux/'
      )
    );
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
