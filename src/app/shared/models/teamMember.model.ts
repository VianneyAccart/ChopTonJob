export class teamMember {
  name: string;
  lastname: string;
  imgSrc: string;
  imgAlt: string;
  gitUrl: string;
  linkedinUrl: string;

  constructor(
    name: string,
    lastname: string,
    imgSrc: string,
    imgAlt: string,
    gitUrl: string,
    linkedinUrl: string
  ) {
    this.name = name;
    this.lastname = lastname;
    this.imgSrc = imgSrc;
    this.imgAlt = imgAlt;
    this.gitUrl = gitUrl;
    this.linkedinUrl = linkedinUrl;
  }
}
