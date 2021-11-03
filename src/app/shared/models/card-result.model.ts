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
  private _companyUrl: string;

  constructor(
    companyName: string,
    companyRaisonSociale: string,
    companyCity: string,
    companyAlternance: boolean,
    companyStars: number,
    companyHeadcount: string,
    companySiret: string,
    companyContact: string,
    companyAddress: string,
    companyNaf: string,
    companyUrl: string
  ) {
    this._companyName = companyName;
    this._companyRaisonSociale = companyRaisonSociale;
    this._companyCity = companyCity;
    this._companyAlternance = companyAlternance;
    this._companyStars = companyStars;
    this._companyHeadcount = companyHeadcount;
    this._companySiret = companySiret;
    this._companyContact = companyContact;
    this._companyAddress = companyAddress;
    this._companyNaf = companyNaf;
    this._companyUrl = companyUrl;
  }

  /**
   * Getter companyName
   * @return {string}
   */
  public get companyName(): string {
    return this._companyName;
  }

  /**
   * Getter companyRaisonSociale
   * @return {string}
   */
  public get companyRaisonSociale(): string {
    return this._companyRaisonSociale;
  }

  /**
   * Getter companyCity
   * @return {string}
   */
  public get companyCity(): string {
    return this._companyCity;
  }

  /**
   * Getter companyAlternance
   * @return {boolean}
   */
  public get companyAlternance(): boolean {
    return this._companyAlternance;
  }

  /**
   * Getter companyStars
   * @return {number}
   */
  public get companyStars(): number {
    return this._companyStars;
  }

  /**
   * Getter companyHeadcount
   * @return {string}
   */
  public get companyHeadcount(): string {
    return this._companyHeadcount;
  }

  /**
   * Getter companySiret
   * @return {string}
   */
  public get companySiret(): string {
    return this._companySiret;
  }

  /**
   * Getter companyContact
   * @return {string}
   */
  public get companyContact(): string {
    return this._companyContact;
  }

  /**
   * Getter companyAddress
   * @return {string}
   */
  public get companyAddress(): string {
    return this._companyAddress;
  }

  /**
   * Getter companyNaf
   * @return {string}
   */
  public get companyNaf(): string {
    return this._companyNaf;
  }

  /**
   * Setter companyName
   * @param {string} value
   */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  public set companyName(value: string) {
    this._companyName = value;
  }

  /**
   * Setter companyRaisonSociale
   * @param {string} value
   */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  public set companyRaisonSociale(value: string) {
    this._companyRaisonSociale = value;
  }

  /**
   * Setter companyCity
   * @param {string} value
   */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  public set companyCity(value: string) {
    this._companyCity = value;
  }

  /**
   * Setter companyAlternance
   * @param {boolean} value
   */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  public set companyAlternance(value: boolean) {
    this._companyAlternance = value;
  }

  /**
   * Setter companyStars
   * @param {number} value
   */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  public set companyStars(value: number) {
    this._companyStars = value;
  }

  /**
   * Setter companyHeadcount
   * @param {string} value
   */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  public set companyHeadcount(value: string) {
    this._companyHeadcount = value;
  }

  /**
   * Setter companySiret
   * @param {string} value
   */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  public set companySiret(value: string) {
    this._companySiret = value;
  }

  /**
   * Setter companyContact
   * @param {string} value
   */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  public set companyContact(value: string) {
    this._companyContact = value;
  }

  /**
   * Setter companyAddress
   * @param {string} value
   */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  public set companyAddress(value: string) {
    this._companyAddress = value;
  }

  /**
   * Setter companyNaf
   * @param {string} value
   */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  public set companyNaf(value: string) {
    this._companyNaf = value;
  }

  /**
   * Getter companyUrl
   * @return {string}
   */
  public get companyUrl(): string {
    return this._companyUrl;
  }

  /**
   * Setter companyUrl
   * @param {string} value
   */
  public set companyUrl(value: string) {
    this._companyUrl = value;
  }
}
