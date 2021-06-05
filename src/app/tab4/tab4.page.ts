import { Component, OnInit } from '@angular/core';
import { PanelService } from '../services/panel.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  userProfileData: any;
  postImgUrl: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.ngOnItFunction();
  }

  ngOnItFunction(){
    this.userProfileData = this.userService.userData;
    console.log(this.userProfileData);
  }

}
