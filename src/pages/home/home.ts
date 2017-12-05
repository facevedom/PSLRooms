import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { RoomHandlerProvider } from '../../providers/room-handler/room-handler';
import { RoomDetailPage } from '../room-detail/room-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rooms: any;
  roomsList: any = [];

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public roomHandler: RoomHandlerProvider) {
  }

  viewDetail(name) {
    this.navCtrl.push(RoomDetailPage, name);
  }

  fetchRooms() {
    this.roomsList = [];
    let loader = this.loadingCtrl.create({
      content: 'Cargando salas...'
    });

    loader.present().then(() => {
      this.roomHandler.getRooms().then(data => {
        this.rooms = data;
        for (var key in this.rooms) {
          this.roomsList.push({ nombre: key, 
            piso: this.rooms[key].Piso,
            asientos: this.rooms[key].Asientos,
            ocupada: this.rooms[key].Ocupada, 
            limpieza: this.rooms[key].Limpieza
          })
        }
        
        loader.dismiss();
        });
      });
    }

  ionViewWillEnter() {
    this.fetchRooms();
  }

}