import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLS } from './urls.service';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
  
  constructor(private http: HttpClient) { }
   

  // https://randomuser.me/api/?page=1&results=10&seed=feed

  getAllFriendsData(page = 1) {
    return this.http.get(
      `${URLS.baseUrl}?page=${page}&results=10&seed=feed`);
  }
 
   
} 
 

