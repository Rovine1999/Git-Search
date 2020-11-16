import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any[];
  repos: Object;
  username: string

  constructor(private ProfileService: ProfileService) { 

  }
  
  findProfile(){
    this.ProfileService.updateProfile(this.username)

    this.ProfileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      
    })

    this.ProfileService.getProfileRepos().subscribe(repos => {
  
    })
  }

  ngOnInit(): void {
  }

}
