import { Component, OnInit } from '@angular/core';
import { PanelService } from '../services/panel.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  allFriendsDets: any = [];
  userDetails: any = this.userService.userData;
  page = 1;
  constructor(private panelService: PanelService, private userService: UserService) {}
  

  ngOnInit(){
    this.getNewsfeedData();
  }

  getNewsfeedData(ev?){
    this.panelService.getAllFriendsData(this.page).subscribe(
      (res:any)=>{
        console.log(res);
        if(ev) ev.target.complete();
        this.allFriendsDets = ev ? [...this.allFriendsDets, ...res.results] : res.results;
        console.log(this.allFriendsDets);
      },(err)=>{
        if(ev) ev.target.complete();
        console.log('err',err);
        
      }
    )
  }
  
  loadData(ev){
    this.page++;
    this.getNewsfeedData(ev);
    
  }

}


   

