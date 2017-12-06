import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { RoomHandlerProvider } from '../../providers/room-handler/room-handler';
import { RoomDetailPage } from '../room-detail/room-detail';
import { AddRoomPage } from '../add-room/add-room';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rooms: any;
  roomsList: any = [];

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public roomHandler: RoomHandlerProvider,
    public alert: AlertController) {
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
            limpieza: this.rooms[key].Limpieza,
            imagen: this.rooms[key].Image
          })
        }
        
      loader.dismiss();
      });
    });
  }

  deleteRoom(name) {
    let alert = this.alert.create({
      title: 'Eliminar sala',
      message: `¿Seguro que desea eliminar la sala ${name}?`,
      buttons: [{
        text: "Aceptar",
        handler: () => {
          this.roomHandler.deleteRoom(name).then(data => {
            this.fetchRooms();
          });
        }
      }, {
        text: "Cancelar",
        role: 'cancel'
      }]
    })
    alert.present();
  }

  createRoom() {
    this.navCtrl.push(AddRoomPage);
  }

  ionViewWillEnter() {
    this.fetchRooms();
  }

}
