import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  constructor(private httpClient: HttpClient) {}

  // Get department list from departments.json
  getDepartments(): Observable<string[]> {
    return this.httpClient.get<string[]>('assets/departments.json');
  }
}
