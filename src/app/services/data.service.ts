
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {

  private REST_API_SERVER = "http://localhost:8102/orders/alldata";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
}

