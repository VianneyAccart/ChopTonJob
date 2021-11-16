import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Card} from '../models/Card.model';
import {Request} from '../models/Request.model';
import {ResultCompanies} from '../models/ResultCompanies.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  resultList: Card[] | undefined;
  totalResult: number | undefined;
  // Useful in case of error during API call
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

  // Get datas from API thanks to parameters given by form component
  public getCompanies(requestParams: Request): any {
    // Use request in getCompanies
    const request = this.setParams(requestParams);
    // Concat baseUrl and request to create perfect matching request
    this.http.get<ResultCompanies>(this.baseUrl + request).subscribe(
      // If everything is good
      (response) => {
        // First, empty the resultList to avoid double informations
        this.resultList?.splice(0, this.resultList.length);
        // Push all elements of the response in resultList
        if (response.companies !== undefined) this.resultList?.push(...response.companies);
        // Param the errorRequest
        this.errorRequest.numero = 0;
        this.totalResult = response.companies_count;
        console.log(this.totalResult);
      },
      // If there's an error
      (error) => {
        // Param the errorRequest
        this.errorRequest.numero = 1;
        this.errorRequest.message = error;
      }
    );
  }

  // Param the request according to user's choices to match the API pattern
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
      // Convert array of selected departments to string
      const stringDepartments = requestParams.selectedDepartments.toString();
      request = request.concat(`&departments=${stringDepartments}`);
    }
    return request;
  }
}
