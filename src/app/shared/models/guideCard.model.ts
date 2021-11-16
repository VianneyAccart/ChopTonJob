export class GuideCard {
  private _title: string;
  private _description: string;
  private _image: string;
  private _imageAlt: string;

  constructor(title: string, description: string, image: string, imageAlt: string) {
    this._title = title;
    this._description = description;
    this._image = image;
    this._imageAlt = imageAlt;
  }

  /**
   * Getter title
   * @return {string}
   */
  public get title(): string {
    return this._title;
  }

  /**
   * Setter title
   * @param {string} value
   */
  public set title(value: string) {
    this._title = value;
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
   * Getter image
   * @return {string}
   */
  public get image(): string {
    return this._image;
  }

  /**
   * Setter image
   * @param {string} value
   */
  public set image(value: string) {
    this._image = value;
  }

  /**
   * Getter imageAlt
   * @return {string}
   */
  public get imageAlt(): string {
    return this._imageAlt;
  }

  /**
   * Setter imageAlt
   * @param {string} value
   */
  public set imageAlt(value: string) {
    this._imageAlt = value;
  }
}
