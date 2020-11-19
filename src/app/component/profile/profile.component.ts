import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { HttpClient } from '@angular/common/http';
import { Repositories } from 'src/app/repositories';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent implements OnInit {
  profiles: any= []
  repos: Repositories = [];
  username: string;


  newProfile: Users;



  constructor(private ProfileService: ProfileService, private http:HttpClient) { 
    // this.ProfileService.getProfileInfo(this.username).subscribe((profile :any[])=> {
    // console.log(profile);
    // this.profile = profile;      
    // });
    
    // this.ProfileService.getProfileRepos().subscribe((repos:any[]) => {
    //  console.log(repos);
    //   this.repos = repos;
    // })

    }
  
  findProfile(){
  //  this.ProfileService.updateProfile(this.username);

    this.ProfileService.getProfileInfo(this.username).subscribe(profile => {
     
      this.newProfile = profile;
      console.log(JSON.stringify(this.newProfile));
      this.profiles.push(this.newProfile);
    });

    this.ProfileService.getProfileRepos(this.username).subscribe(repos => {
  
  this.repos = repos;
  console.log(JSON.stringify(this.repos));

    })
  }

  ngOnInit(): void {
    
    // this.ProfileService.updateProfile("Rovine1999");
    // this.ProfileService.getProfileRepos().subscribe((repos:any[]) => {
    //   this.repos = repos;
    //     });

    //     this.ProfileService.getProfileInfo().subscribe((profile:any[]) => {
    //       console.log(profile);
    //       this.profile = profile;
    //     });


  }

}
