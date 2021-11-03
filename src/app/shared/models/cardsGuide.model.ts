export class cardsGuide {
  titre: string;
  description: string;
  imgSrc: string;
  imgAlt: string;

  constructor(titre: string, description: string, imgSrc: string, imgAlt: string) {
    this.titre = titre;
    this.description = description;
    this.imgSrc = imgSrc;
    this.imgAlt = imgAlt;
  }
}
