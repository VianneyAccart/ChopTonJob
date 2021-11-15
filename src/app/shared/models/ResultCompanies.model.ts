import {Card} from './card-result.model';

export class ResultCompanies {
  private _companies: Card[] | undefined;
  private _companies_count: number | undefined;
  private _rome_code: string | undefined;
  private _rome_label: string | undefined;
  private _url: string | undefined;

  /**
   * Getter companies
   * @return {Card[]}
   */
  public get companies(): Card[] | undefined {
    return this._companies;
  }
  /**
   * Setter companies
   * @param {Card[]} value
   */
  public set companies(value: Card[] | undefined) {
    this._companies = value;
  }

  /**
   * Getter companies_count
   * @return {number}
   */
  public get companies_count(): number | undefined {
    return this._companies_count;
  }
  /**
   * Setter companies_count
   * @param {number} value
   */
  public set companies_count(value: number | undefined) {
    this._companies_count = value;
  }

  /**
   * Getter rome_code
   * @return {string}
   */
  public get rome_code(): string | undefined {
    return this._rome_code;
  }
  /**
   * Setter rome_code
   * @param {string} value
   */
  public set rome_code(value: string | undefined) {
    this._rome_code = value;
  }

  /**
   * Getter rome_label
   * @return {string}
   */
  public get rome_label(): string | undefined {
    return this._rome_label;
  }
  /**
   * Setter rome_label
   * @param {string} value
   */
  public set rome_label(value: string | undefined) {
    this._rome_label = value;
  }

  /**
   * Getter url
   * @return {string}
   */
  public get url(): string | undefined {
    return this._url;
  }

  /**
   * Setter url
   * @param {string} value
   */
  public set url(value: string | undefined) {
    this._url = value;
  }
}
