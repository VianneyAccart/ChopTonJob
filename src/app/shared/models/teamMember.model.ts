export class TeamMember {
  private _name: string;
  private _lastname: string;
  private _imgSrc: string;
  private _imgAlt: string;
  private _gitUrl: string;
  private _linkedinUrl: string;

  constructor(
    name: string,
    lastname: string,
    imgSrc: string,
    imgAlt: string,
    gitUrl: string,
    linkedinUrl: string
  ) {
    this._name = name;
    this._lastname = lastname;
    this._imgSrc = imgSrc;
    this._imgAlt = imgAlt;
    this._gitUrl = gitUrl;
    this._linkedinUrl = linkedinUrl;
  }
  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }
  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }
  /**
   * Getter lastname
   * @return {string}
   */
  public get lastname(): string {
    return this._lastname;
  }

  /**
   * Setter lastname
   * @param {string} value
   */
  public set lastname(value: string) {
    this._lastname = value;
  }

  /**
   * Getter imgSrc
   * @return {string}
   */
  public get imgSrc(): string {
    return this._imgSrc;
  }

  /**
   * Setter imgSrc
   * @param {string} value
   */
  public set imgSrc(value: string) {
    this._imgSrc = value;
  }

  /**
   * Getter imgAlt
   * @return {string}
   */
  public get imgAlt(): string {
    return this._imgAlt;
  }
  /**
   * Setter imgAlt
   * @param {string} value
   */
  public set imgAlt(value: string) {
    this._imgAlt = value;
  }

  /**
   * Getter gitUrl
   * @return {string}
   */
  public get gitUrl(): string {
    return this._gitUrl;
  }
  /**
   * Setter gitUrl
   * @param {string} value
   */
  public set gitUrl(value: string) {
    this._gitUrl = value;
  }

  /**
   * Getter linkedinUrl
   * @return {string}
   */
  public get linkedinUrl(): string {
    return this._linkedinUrl;
  }

  /**
   * Setter linkedinUrl
   * @param {string} value
   */
  public set linkedinUrl(value: string) {
    this._linkedinUrl = value;
  }
}
