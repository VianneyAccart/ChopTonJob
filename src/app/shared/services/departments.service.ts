import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  constructor(private httpClient: HttpClient) {}

  getDepartments(): Observable<any> {
    return this.httpClient.get('assets/departments.json');
  }
}
