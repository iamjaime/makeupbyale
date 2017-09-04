import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PortfolioService {

  constructor(public http: Http) { }

  /**
   * Handles Getting the portfolio
   * @returns {Observable<R>}
   */
  getPortfolio(){
    return this.http.get('http://api.nycmakeupbyale.dev/api/portfolio').map((res) => res.json());
  }

}
