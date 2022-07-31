import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SangamNetworkService {

  constructor(private http: HttpClient) { }


  getSnd2Status() {
    return this.http.get('http://49.247.7.123/check/sangam/snd2');
  }

}
