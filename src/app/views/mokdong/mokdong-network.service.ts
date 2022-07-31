import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MokdongNetworkService {

  getSnd1Status() {
    return this.http.get('http://49.247.7.123/check/mokdong/snd1');
  }

  constructor(private http: HttpClient) { }
}
