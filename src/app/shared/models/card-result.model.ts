export class Card {
  private _companyName: string;
  private _companyRaisonSociale: string;
  private _companyCity: string;
  private _companyAlternance: boolean;
  private _companyStars: number;
  private _companyHeadcount: string;
  private _companySiret: string;
  private _companyContact: string;
  private _companyAddress: string;
  private _companyNaf: string;

  constructor(
    companyName: string,
    companyRaisonSociale: string,
    companyCity: string,
    companyAlternance: boolean,
    companyStars: number,
    companyHeadcount: string,
    companySiret: string,
    companyContact: string,
    companyAddres: string,
    companyNaf: string
  ) {
    this._companyName = companyName;
    this._companyRaisonSociale = companyRaisonSociale;
    this._companyCity = companyCity;
    this._companyAlternance = companyAlternance;
    this._companyStars = companyStars;
    this._companyHeadcount = companyHeadcount;
    this._companySiret = companySiret;
    this._companyContact = companyContact;
    this._companyAddress = companyAddres;
    this._companyNaf = companyNaf;
  }

  /**
   * Getter companyName
   * @return {string}
   */
  public get companyName(): string {
    return this._companyName;
  }
  /**
   * Setter companyName
   * @param {string} value
   */
  public set companyName(value: string) {
    this._companyName = value;
  }
  /**
   * Getter companyRaisonSociale
   * @return {string}
   */
  public get companyRaisonSociale(): string {
    return this._companyRaisonSociale;
  }
  /**
   * Setter companyRaisonSociale
   * @param {string} value
   */
  public set companyRaisonSociale(value: string) {
    this._companyRaisonSociale = value;
  }

  /**
   * Getter companyCity
   * @return {string}
   */
  public get companyCity(): string {
    return this._companyCity;
  }

  /**
   * Setter companyCity
   * @param {string} value
   */
  public set companyCity(value: string) {
    this._companyCity = value;
  }

  /**
   * Getter companyAlternance
   * @return {boolean}
   */
  public get companyAlternance(): boolean {
    return this._companyAlternance;
  }

  /**
   * Setter companyAlternance
   * @param {boolean} value
   */
  public set companyAlternance(value: boolean) {
    this._companyAlternance = value;
  }

  /**
   * Getter companyStars
   * @return {number}
   */
  public get companyStars(): number {
    return this._companyStars;
  }

  /**
   * Setter companyStars
   * @param {number} value
   */
  public set companyStars(value: number) {
    this._companyStars = value;
  }

  /**
   * Getter companyHeadcount
   * @return {string}
   */
  public get companyHeadcount(): string {
    return this._companyHeadcount;
  }

  /**
   * Setter companyHeadcount
   * @param {string} value
   */
  public set companyHeadcount(value: string) {
    this._companyHeadcount = value;
  }

  /**
   * Getter companySiret
   * @return {string}
   */
  public get companySiret(): string {
    return this._companySiret;
  }

  /**
   * Setter companySiret
   * @param {string} value
   */
  public set companySiret(value: string) {
    this._companySiret = value;
  }

  /**
   * Getter companyContact
   * @return {string}
   */
  public get companyContact(): string {
    return this._companyContact;
  }

  /**
   * Setter companyContact
   * @param {string} value
   */
  public set companyContact(value: string) {
    this._companyContact = value;
  }

  /**
   * Getter companyAddress
   * @return {string}
   */
  public get companyAddress(): string {
    return this._companyAddress;
  }

  /**
   * Setter companyAddress
   * @param {string} value
   */
  public set companyAddress(value: string) {
    this._companyAddress = value;
  }

  /**
   * Getter companyNaf
   * @return {string}
   */
  public get companyNaf(): string {
    return this._companyNaf;
  }

  /**
   * Setter companyNaf
   * @param {string} value
   */
  public set companyNaf(value: string) {
    this._companyNaf = value;
  }
}
