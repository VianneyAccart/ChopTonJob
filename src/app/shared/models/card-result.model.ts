export class Card {
  private _address: string;
  private _alternance: boolean;
  private _city: string;
  private _headcount_text: string;
  private _name: string;
  private _siret: string;
  private _stars: number;
  private _website: string;
  private _naf_text: string;
  private _raison_sociale: string;
  private _contact_mode: string;
  private _is_shown: boolean;

  constructor(
    address: string,
    alternance: boolean,
    city: string,
    headcount_text: string,
    name: string,
    siret: string,
    stars: number,
    website: string,
    naf_text: string,
    raison_sociale: string,
    contact_mode: string,
    is_shown = false
  ) {
    this._address = address;
    this._alternance = alternance;
    this._city = city;
    this._naf_text = naf_text;
    this._headcount_text = headcount_text;
    this._raison_sociale = raison_sociale;
    this._name = name;
    this._siret = siret;
    this._stars = stars;
    this._website = website;
    this._contact_mode = contact_mode;
    this._is_shown = is_shown;
  }

  /**
   * Getter is_shown
   * @return {boolean}
   */
  public get is_shown(): boolean {
    return this._is_shown;
  }

  /**
   * Setter is_shown
   * @param {boolean} value
   */
  public set is_shown(value: boolean) {
    this._is_shown = value;
  }

  /**
   * Getter address
   * @return {string}
   */
  public get address(): string {
    return this._address;
  }

  /**
   * Setter address
   * @param {string} value
   */
  public set address(value: string) {
    this._address = value;
  }

  /**
   * Getter alternance
   * @return {boolean}
   */
  public get alternance(): boolean {
    return this._alternance;
  }

  /**
   * Setter alternance
   * @param {boolean} value
   */
  public set alternance(value: boolean) {
    this._alternance = value;
  }

  /**
   * Getter city
   * @return {string}
   */
  public get city(): string {
    return this._city;
  }

  /**
   * Setter city
   * @param {string} value
   */
  public set city(value: string) {
    this._city = value;
  }

  /**
   * Getter headcount_text
   * @return {string}
   */
  public get headcount_text(): string {
    return this._headcount_text;
  }

  /**
   * Setter headcount_text
   * @param {string} value
   */
  public set headcount_text(value: string) {
    this._headcount_text = value;
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
   * Getter siret
   * @return {string}
   */
  public get siret(): string {
    return this._siret;
  }

  /**
   * Setter siret
   * @param {string} value
   */
  public set siret(value: string) {
    this._siret = value;
  }

  /**
   * Getter stars
   * @return {number}
   */
  public get stars(): number {
    return this._stars;
  }

  /**
   * Setter stars
   * @param {number} value
   */
  public set stars(value: number) {
    this._stars = value;
  }

  /**
   * Getter website
   * @return {string}
   */
  public get website(): string {
    return this._website;
  }

  /**
   * Setter website
   * @param {string} value
   */
  public set website(value: string) {
    this._website = value;
  }

  /**
   * Getter naf_text
   * @return {string}
   */
  public get naf_text(): string {
    return this._naf_text;
  }

  /**
   * Setter naf_text
   * @param {string} value
   */
  public set naf_text(value: string) {
    this._naf_text = value;
  }

  /**
   * Getter raison_sociale
   * @return {string}
   */
  public get raison_sociale(): string {
    return this._raison_sociale;
  }

  /**
   * Setter raison_sociale
   * @param {string} value
   */
  public set raison_sociale(value: string) {
    this._raison_sociale = value;
  }

  /**
   * Getter contact_mode
   * @return {string}
   */
  public get contact_mode(): string {
    return this._contact_mode;
  }

  /**
   * Setter contact_mode
   * @param {string} value
   */
  public set contact_mode(value: string) {
    this._contact_mode = value;
  }
}
