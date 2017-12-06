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
    Limpieza: "",
    Image: ""
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

  selectImage() {
    this.imagePicker.getPictures({maximumImagesCount: 1,
       outputType: 1,
       width: 500,
       height: 500,
       quality: 80}).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.room.Image = results[i];
      }
    }, (err) => { } );
  }

  saveRoom() {
    if(this.roomName != '') {
      this.roomProvider.updateRoom(this.room, this.roomName).then(data => {
        this.navCtrl.pop();
      });
    } else {
      let alert = this.alert.create({
        title: 'Error',
        message: 'Debes ingresar un nombre',
        buttons: [{
          text: "Aceptar",
          role: 'cancel'
        }]
      })
      alert.present();
    }
  }

}
