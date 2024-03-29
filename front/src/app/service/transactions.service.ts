import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlConstants} from '../util/url-constants';
import {Transaction} from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  transactionsService;

  constructor(
    private http: HttpClient
  ) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<any[]>(UrlConstants.TRANSACTIONS);
  }


}

