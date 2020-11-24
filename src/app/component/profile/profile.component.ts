import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { HttpClient } from '@angular/common/http';
import { Repositories } from 'src/app/repositories';
import { Users } from 'src/app/users';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent implements OnInit {
  profile: any;
  repos: Repositories = [];
  username: string;


  newProfile: Users;
  searchForm;


  constructor(private ProfileService: ProfileService, private http:HttpClient, private formBuilder: FormBuilder) { 
    this.searchForm = this.formBuilder.group({
      username: ''
    })
  }
  
  findProfile(data){
  

    this.ProfileService.getProfileInfo(data.username).subscribe({
      next: value => {
       this.profile = value;
      }
    })

    
    
  }

  ngOnInit(): void {

    this.ProfileService.getProfileInfo('Rovine1999').subscribe({
      next: value => {
       this.profile = value;
      }
    })

    
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
