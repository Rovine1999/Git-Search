import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private username: string;
private clientid = 'afd0ed65cc4d18a33699';
private clientsecret = '6f6bb4dc2b62197ae05bb13e9dbee1f64da00b94 ';

  constructor(private http: HttpClient) { 
    console.log('');
    this.username = '';
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
