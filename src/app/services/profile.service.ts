import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Map } from 'rxjs/operator';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private username: string;
private clientid = 'afd0ed65cc4d18a33699';
private clientsecret = '47e571b721fc454e4e4e057c3e9e09c406171fee';

  constructor(private http: HttpClient, operator: Map) { 
    console.log("service is not ready!");
    this.username = 'Rovine1999';
  }


  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "?client_secret" + this.clientsecret )
    .map( res => res.json());
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "repos?client_id=" + this.clientid + "?client_secret" + this.clientsecret )
    .map( res => res.json());
  }

  updateProfile(username: string){
    this.username = username;
  }
}
