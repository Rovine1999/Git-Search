import { Injectable } from '@angular/core';
import { Http } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private username: string;
private clientid = 'afd0ed65cc4d18a33699';
private clientsecret = '47e571b721fc454e4e4e057c3e9e09c406171fee';

  constructor(private http: Http) { 
    console.log("service is not ready!");
    this.username = 'Rovine1999';
  }


  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "?client_secret" + this.clientsecret )
    .map( res => res.json());
  }
}
