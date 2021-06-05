import { Component, OnInit } from '@angular/core';
import { PanelService } from '../services/panel.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  allFriendsDetails: any;
  userDetails: any = this.userService.userData;
  
  constructor(private panelService: PanelService, private userService: UserService) { }

  ngOnInit() {
    this.ngOnInitFunction();
  }

  ngOnInitFunction(){
    this.panelService.getAllFriendsData().subscribe((res:any)=>{
        console.log(res);
        this.allFriendsDetails = res.results;
        console.log(this.allFriendsDetails);
      }
    ,(err)=>{
      console.log('err',err);
    });
  }

}
