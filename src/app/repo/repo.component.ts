import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repos:any;

  constructor( private ProfileService: ProfileService) { 

  {

  this.ProfileService = ProfileService

  }
}
 getProfileRepo(){

 }

  ngOnInit(): void {
    this.ProfileService.getProfileRepos().subscribe((repos:any) =>{
      console.log(repos);
      this.repos = repos
    })
  }

}
