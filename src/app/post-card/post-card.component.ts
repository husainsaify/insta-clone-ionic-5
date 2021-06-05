import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() postCardDets:any;
  userDets:any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.ngOnItFunction();
  }

  ngOnItFunction(){
   this.userDets = this.userService.userData; 
  }

}
