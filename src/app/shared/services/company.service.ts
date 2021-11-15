import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Card} from '../models/card-result.model';
import {Request} from '../models/Request.model';
import {ResultCompanies} from '../models/ResultCompanies.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  resultList: Card[] | undefined;
  errorRequest = {
    numero: 0,
    message: '',
  };
  pageSize: number;
  page: number;
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.pageSize = 100;
    this.page = 1;
    this.baseUrl = 'https://rechercheinformatique.fr/queryapi.php?';
    this.resultList = [];
  }

  public getCompanies(requestParams: Request) {
    // Permet de récupérer le résultat de setParams dans request
    const request = this.setParams(requestParams);
    this.http.get<ResultCompanies>(this.baseUrl + request).subscribe(
      (response) => {
        console.log(response.companies);
        this.resultList?.splice(0, this.resultList.length);
        if (response.companies !== undefined) this.resultList?.push(...response.companies);
        this.errorRequest.numero = 0;
      },
      (error) => {
        this.errorRequest.numero = 1;
        this.errorRequest.message = error;
      }
    );
  }

  private setParams(requestParams: Request): string {
    let request = `rome_codes=${requestParams.romeCode}&contract=${requestParams.contract}&page_size=${this.pageSize}`;
    // If user uses geolocalization
    if (
      requestParams.latitude !== '' &&
      requestParams.longitude !== '' &&
      requestParams.distance !== undefined
    ) {
      request = request.concat(
        `&latitude=${requestParams.latitude}&longitude=${requestParams.longitude}&distance=${requestParams.distance}`
      );
      // If user uses departments instead of geolocalization
    } else if (
      requestParams.selectedDepartments !== undefined &&
      requestParams.selectedDepartments.length !== 0
    ) {
      const stringDepartments = requestParams.selectedDepartments.toString();
      request = request.concat(`&departments=${stringDepartments}`);
    }
    return request;
  }
}
