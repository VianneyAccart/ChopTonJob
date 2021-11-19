export class Request {
  private _latitude: number | undefined;
  private _longitude: number | undefined;
  private _selectedDepartments: string[] | undefined;
  private _distance: string | undefined;
  private _contract: string;
  private _romeCode: string;

  constructor(
    contract: string,
    romeCode: string,
    latitude?: number,
    longitude?: number,
    selectedDepartments?: string[],
    distance?: string
  ) {
    this._longitude = longitude;
    this._latitude = latitude;
    this._selectedDepartments = selectedDepartments;
    this._distance = distance;
    this._contract = contract;
    this._romeCode = romeCode;
  }

  /**
   * Getter latitude
   * @return {any}
   */
  public get latitude(): any {
    return this._latitude;
  }

  /**
   * Setter latitude
   * @param {any} value
   */
  public set latitude(value: any) {
    this._latitude = value;
  }

  /**
   * Getter longitude
   * @return {any}
   */
  public get longitude(): any {
    return this._longitude;
  }

  /**
   * Setter longitude
   * @param {any} value
   */
  public set longitude(value: any) {
    this._longitude = value;
  }

  /**
   * Getter selectedDepartments
   * @return {string[]}
   */
  public get selectedDepartments(): string[] | undefined {
    return this._selectedDepartments;
  }

  /**
   * Setter selectedDepartments
   * @param {string[]} value
   */
  public set selectedDepartments(value: string[] | undefined) {
    this._selectedDepartments = value;
  }

  /**
   * Getter distance
   * @return {string }
   */
  public get distance(): string | undefined {
    return this._distance;
  }

  /**
   * Setter distance
   * @param {string } value
   */
  public set distance(value: string | undefined) {
    this._distance = value;
  }

  /**
   * Getter contract
   * @return {string}
   */
  public get contract(): string {
    return this._contract;
  }

  /**
   * Setter contract
   * @param {string} value
   */
  public set contract(value: string) {
    this._contract = value;
  }

  /**
   * Getter romeCode
   * @return {string}
   */
  public get romeCode(): string {
    return this._romeCode;
  }

  /**
   * Setter romeCode
   * @param {string} value
   */
  public set romeCode(value: string) {
    this._romeCode = value;
  }
}
