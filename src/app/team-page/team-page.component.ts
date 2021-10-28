import { Component, OnInit } from '@angular/core';
import { teamMember } from '../shared/models/teamMember.model';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css'],
})
export class TeamPageComponent implements OnInit {
  members: teamMember[];

  constructor() {
    this.members = new Array();
  }

  //generate team members and push them in the array 'members'
  ngOnInit(): void {
    const memberBrice = new teamMember(
      'Brice',
      'Ducroux',
      'assets/img/brice.jpeg',
      'Portrait Brice Ducroux',
      'https://github.com/Brice-Ducroux',
      'https://www.linkedin.com/in/brice-ducroux-473854121/'
    );
    const memberKarim = new teamMember(
      'Karim',
      'Boudjemai',
      'assets/img/karim.png',
      'Portrait Karim Boudjemai',
      'https://github.com/Kariim42',
      'https://www.linkedin.com/in/karim-boudjemai-%F0%9F%96%A5-87490b221/'
    );
    const memberVianney = new teamMember(
      'Vianney',
      'Accart',
      'assets/img/vianney.png',
      'Portrait Vianney Accart',
      'https://github.com/VianneyAccart',
      'https://www.linkedin.com/in/vianneyaccart/'
    );
    const memberCamille = new teamMember(
      'Camille',
      'Frelat',
      'assets/img/camille.png',
      'Portrait Camille Frelat',
      'https://github.com/camfrelat',
      'www.linkedin.com/in/camillefrelat'
    );
    const memberAdam = new teamMember(
      'Adam',
      'Roux',
      'assets/img/adam.jpg',
      'Portrait Adam Roux',
      'https://github.com/AdamRoux',
      'https://www.linkedin.com/in/adamroux/'
    );

    this.members.push(
      memberBrice,
      memberKarim,
      memberVianney,
      memberCamille,
      memberAdam
    );
  }
}
