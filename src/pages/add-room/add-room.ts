import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoomHandlerProvider } from '../../providers/room-handler/room-handler';
import { ImagePicker } from '@ionic-native/image-picker';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the AddRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-room',
  templateUrl: 'add-room.html',
})
export class AddRoomPage {
  floors: any = [];
  roomName: string = '';
  room: any = {
    Asientos: "",
    Piso: "",
    Ocupada: "",
    Limpieza: ""
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public roomProvider: RoomHandlerProvider,
    public alert: AlertController,
    public imagePicker: ImagePicker) {
  }

  ionViewDidLoad() {
    this.roomProvider.getFloors().then(res => {
      this.floors = res;
    });
  }

  cancel() {
    this.ionViewDidLoad();
  }

  saveRoom() {
    this.roomProvider.updateRoom(this.room, this.roomName).then(data => {
      this.navCtrl.pop();
    });
  }

}
