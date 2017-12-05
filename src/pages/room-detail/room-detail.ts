import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoomHandlerProvider } from '../../providers/room-handler/room-handler';
import { ImagePicker } from '@ionic-native/image-picker';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the RoomDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room-detail',
  templateUrl: 'room-detail.html',
})
export class RoomDetailPage {
  room: any = {};
  roomName: any;
  floors: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public roomProvider: RoomHandlerProvider,
    public alert: AlertController,
    public imagePicker: ImagePicker) {
  }

  ionViewDidLoad() {
    this.roomName = this.navParams.data;
    
    this.roomProvider.getRoomDetail(this.roomName).then(data => {
      this.room = data;
      console.log(this.room);
    });
    
    this.roomProvider.getFloors().then(res => {
      this.floors = res;
    });

  }

  selectImage() {
    this.imagePicker.getPictures({maximumImagesCount: 1}).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.room.image = results[i];
      }
    }, (err) => { } );
  }

  updateRoom() {
    this.roomProvider.updateRoom(this.room, this.roomName).then(data => {
      let alert = this.alert.create({
        title: 'Editar sala',
        message: 'Datos actualizados',
        buttons: [{
          text: "Aceptar",
          role: 'cancel'
        }]
      })
      alert.present();
    })
  }

  cancel() {
    this.ionViewDidLoad();
  }

}
