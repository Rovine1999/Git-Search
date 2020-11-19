import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private clientid = 'afd0ed65cc4d18a33699';
private clientsecret = '6f6bb4dc2b62197ae05bb13e9dbee1f64da00b94 ';

  constructor(private http: HttpClient) { 
    // console.log('Coding is awesome!');
    // this.username = 'Rovine1999';
  }


  getProfileInfo(username){
    // return this.http.get('https://api.github.com/users/' + username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret );
    return this.http.get('https://api.github.com/users/' + username + '?access_token=' + '9329c6131a986e43db9cb62a6d7c7d654777dd16');
   }

   getProfileRepos(username){
     const url = `https://api.github.com/users/${username}/repos?client_id=${this.clientid}&client_secret=${this.clientsecret}` 
    return this.http.get(url);
   }



   updateProfile(username:string){
  	// this.username = username;
  }
}