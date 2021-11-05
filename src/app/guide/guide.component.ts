import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {cardsGuide} from '../shared/models/cardsGuide.model';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css'],
})
export class GuideComponent implements OnInit {
  etapes: cardsGuide[];
  constructor(private titleService: Title) {
    this.etapes = [];
  }
  //generate cardsGuide and push them in the array 'etapes'
  ngOnInit(): void {
    this.etapes.push(
      new cardsGuide(
        "S'organiser...",
        "Planifier et suivre ses candidatures est très important. Cela te permettras de rester organisé et de prévoir des relances en cas de non réponse. Tu peux par exemple utiliser un tableau Excel pour rassembler tous les détails de tes candidatures (nom de l'entreprise, contact, date, relance...) ",
        'assets/img/icons/calendarDateFill.svg',
        'Icone calendrier'
      ),
      new cardsGuide(
        'Mettre ses projets en avant',
        "Crée un portfolio ou un profil Github pour montrer tes projets. Pense pas d'ajouter le lien de ton Github sur ton Linkedin et ton CV cela permettra aux recruteurs de parcourir tes différents projets et leur évolution. Diffuser ses projets sur Linkedin peut aussi être une excellente manière de créer un premier contact avec des entreprises",
        'assets/img/icons/github.svg',
        'Icone Github'
      ),
      new cardsGuide(
        'Solliciter son réseau',
        "En utilisant le réseau social Linkedin par exemple tu peux te faire de nouveaux contacts et te créer de nouvelles opportunités. N'hésite pas à faire des publications régulières pour informer ton réseau de ton évolution professionnelle et mets à jour ton profil régulièrement. Tu peux aussi prendre directement contact avec le ou la responsable RH d'une entreprise et demander quel est le meilleur moyen pour envoyer ta candidature spontanée.",
        'assets/img/icons/linkedin.svg',
        'Icone linkedin'
      ),
      new cardsGuide(
        'Personnaliser sa candidature',
        "Il est important de personnaliser et d'adapter sa candidature pour chaque entreprise. La lettre ou le mail de motivation permettent de montrer ta motivation tout en mettant en avant tes compétences professionnelles et personnelles qui correspondent au poste. C'est aussi l'outil idéal pour expliquer pourquoi cette entreprise te plait et comment ses valeurs te correspondent. N'hésite pas à mettre en avant ta personnalité !",
        'assets/img/icons/fileText.svg',
        'Icone fichier'
      )
    );
    this.setTitle('Découvrez comment réaliser une bonne candidature spontanée !');
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
