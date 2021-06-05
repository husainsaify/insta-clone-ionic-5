import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   userData: any = {
    "userName": "_max99_",
    "name":"max",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/38.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/38.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/38.jpg"
    }
  };

  constructor() { }
}
