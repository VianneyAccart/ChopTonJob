export class teamMember {
  name: string;
  lastname: string;
  imgSrc: string;
  imgAlt: string;

  constructor(name: string, lastname: string, imgSrc: string, imgAlt: string) {
    this.name = name;
    this.lastname = lastname;
    this.imgSrc = imgSrc;
    this.imgAlt = imgAlt;
  }
}
