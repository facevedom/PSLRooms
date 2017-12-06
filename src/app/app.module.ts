import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RoomDetailPage } from '../pages/room-detail/room-detail';
import { RoomHandlerProvider } from '../providers/room-handler/room-handler';
import { ImagePicker } from '@ionic-native/image-picker';
import { AddRoomPage } from '../pages/add-room/add-room';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RoomDetailPage,
    AddRoomPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RoomDetailPage,
    AddRoomPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RoomHandlerProvider,
    ImagePicker
  ]
})
export class AppModule {}
