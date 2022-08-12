import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { companies } from '../data';
import { company_info } from '../type.ts/company.type';
import { Finance } from '../type.ts/finance.type';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private baseUrl = 'https://finnhub.io/api/v1/stock/metric?';
  private key = 'bvmk3if48v6trsjv7it0';
  private wsKey = 'bvmk3if48v6trsjv7iu0';
  private wsHeader: HttpHeaders = new HttpHeaders({"X-Finnhub-Secret": "bvmk3if48v6trsjv7iu0"});
  constructor(private http: HttpClient) { }

  getCompanyInfo(company: string): company_info|null{
    for (const result of companies){
      if (result.ticker == company){
        return result;
      }
    }
    return null;
  }

  getCompanyFinance(company: string){
    return this.http.get<Finance>(`${this.baseUrl}symbol=${company}&metric=all&token=${this.key}`);
  }

  getStock(company: string){
    return 
  }


}
