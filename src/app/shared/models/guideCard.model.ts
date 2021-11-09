export class GuideCard {
  private _titre: string;
  private _description: string;
  private _imgSrc: string;
  private _imgAlt: string;

  constructor(titre: string, description: string, imgSrc: string, imgAlt: string) {
    this._titre = titre;
    this._description = description;
    this._imgSrc = imgSrc;
    this._imgAlt = imgAlt;
  }

  /**
   * Getter titre
   * @return {string}
   */
  public get titre(): string {
    return this._titre;
  }
  /**
   * Setter titre
   * @param {string} value
   */
  public set titre(value: string) {
    this._titre = value;
  }
  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
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
}
