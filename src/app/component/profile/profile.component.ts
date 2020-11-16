import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any[];
  repos: any[];
  username: string;

  constructor(private ProfileService: ProfileService, private http:HttpClient) { 
    this.ProfileService.getProfileInfo().subscribe((profile:any[]) => {
    console.log(profile);
    this.profile = profile;      
    });
    
    this.ProfileService.getProfileRepos().subscribe((repos:any[]) => {
      console.log(repos);
      this.repos = repos;
    })

    }
  
  findProfile(){
   this.ProfileService.updateProfile(this.username);

    this.ProfileService.getProfileInfo().subscribe((profile:any[]) => {
      console.log(profile);
      this.profile = profile;
    });

    this.ProfileService.getProfileRepos().subscribe((repos:any[]) => {
  console.log(repos);
  this.repos = repos;
    })
  }

  ngOnInit(): void {
  }

}
