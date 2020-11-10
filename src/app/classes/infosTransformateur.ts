export class InfosTransformateur {

  private _id: number;
  private _description: string;
  private _nombre_employes: string;
  private _url_site: string;
  private _url_facebook: string;
  private _url_twitter: string;
  private _url_instagram: string;
  private _appartient_groupe: boolean;

  constructor(id: number, description: string, nombre_employes: string, url_site: string, url_facebook: string, url_twitter: string, url_instagram: string, appartient_groupe: boolean) {
    this._id = id;
    this._description = description;
    this._nombre_employes = nombre_employes;
    this._url_site = url_site;
    this._url_facebook = url_facebook;
    this._url_twitter = url_twitter;
    this._url_instagram = url_instagram;
    this._appartient_groupe = appartient_groupe;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get nombre_employes(): string {
    return this._nombre_employes;
  }

  set nombre_employes(value: string) {
    this._nombre_employes = value;
  }

  get url_site(): string {
    return this._url_site;
  }

  set url_site(value: string) {
    this._url_site = value;
  }

  get url_facebook(): string {
    return this._url_facebook;
  }

  set url_facebook(value: string) {
    this._url_facebook = value;
  }

  get url_twitter(): string {
    return this._url_twitter;
  }

  set url_twitter(value: string) {
    this._url_twitter = value;
  }

  get url_instagram(): string {
    return this._url_instagram;
  }

  set url_instagram(value: string) {
    this._url_instagram = value;
  }

  get appartient_groupe(): boolean {
    return this._appartient_groupe;
  }

  set appartient_groupe(value: boolean) {
    this._appartient_groupe = value;
  }
}