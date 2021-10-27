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

  ngOnInit(): void {
    const memberBrice = new teamMember(
      'Brice',
      'Ducroux',
      'assets/img/brice.jpeg',
      'Portrait Brice Ducroux'
    );
    const memberKarim = new teamMember(
      'Karim',
      'Boudjemai',
      'assets/img/brice.jpeg',
      'Portrait Karim Boudjemai'
    );
    // const memberVianney = new teamMember('Vianney', 'Accart');
    // const memberAdam = new teamMember('Adam', 'Roux');
    // const memberCamille = new teamMember('Camille', 'Frelat');

    this.members.push(
      memberBrice,
      memberKarim
      // memberVianney,
      // memberAdam,
      // memberCamille
    );
  }
}
