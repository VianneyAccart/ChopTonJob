import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuideService {
  constructor(private httpClient: HttpClient) {}

  // Get steps used in guide component from guideSteps.json
  getSteps(): Observable<any> {
    return this.httpClient.get('assets/guideSteps.json');
  }
}
