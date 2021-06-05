import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  userDets: any;

  constructor(private userService: UserService) {}
  
  ngOnInit(): void {
    this.ngOnInitFunction();
  }

  

  ngOnInitFunction(){
    this.userDets = this.userService.userData;
  }

}
