import {Injectable} from '@angular/core';
import {CompanyService} from '../services/company.service';
import {Resolve} from '@angular/router';

@Injectable()
export class RouteResolver implements Resolve<any> {
  constructor(public companyService: CompanyService) {}

  async resolve() {
    return this.companyService.totalResult;
  }
}
