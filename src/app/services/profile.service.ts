import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private username: string;
private clientid = 'afd0ed65cc4d18a33699';
// private clientsecret = '47e571b721fc454e4e4e057c3e9e09c406171fee';
private clientsecret = '5e40421fe34d36fb09fa09d50d0f5a056ff4737e';

  constructor(private http: HttpClient) { 
    console.log("service is not ready!");
    this.username = 'Rovine1999';
  }


  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id" + this.clientid + "?client_secret" + this.clientsecret )
    
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id" + this.clientid + "?client_secret" + this.clientsecret )
  }

  updateProfile(username: string){
    this.username = username;
  }
}
