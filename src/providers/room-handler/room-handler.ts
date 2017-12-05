import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RoomHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RoomHandlerProvider {
  baseUrl: string = "https://pslrooms-facevedom.firebaseio.com";
  constructor(public http: Http) {
    
  }

  getRoomDetail(name) {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/Rooms/${name}.json`)
        .subscribe(res => resolve(res.json()));
    });
  }

  getRooms() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/Rooms.json`)
        .subscribe(res => resolve(res.json()));
    });
  }

  deleteRoom(name) {
    return new Promise(resolve => {
      this.http.delete(`${this.baseUrl}/Rooms/${name}.json`)
        .subscribe(res => resolve(res.json()));
    });
  }

  updateRoom(room, name) {
    return new Promise(resolve => {
      this.http.patch(`${this.baseUrl}/Rooms/${name}.json`, JSON.stringify(room))
        .subscribe(res => resolve(res.json()));
    });
  }

  createRoom(room, name) {
    return new Promise(resolve => {
      this.http.patch(`${this.baseUrl}/Rooms/${name}.json`, JSON.stringify(room))
        .subscribe(res => resolve(res.json()));
    });
  }

  getFloors() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/Floors.json`)
        .subscribe(res => resolve(res.json()));
    });
  }

}
