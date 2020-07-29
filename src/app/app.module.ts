import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// 1. Import the fireLibs

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ChatComponent } from './chat/chat.component';
import { CommonModule } from '@angular/common';

const config = {
  apiKey: 'AIzaSyAXzpHlyblkQB3k1D_l2P7ZyD8Kye9NSss',
  authDomain: 'friendlychat-9d695.firebaseapp.com',
  databaseURL: 'https://friendlychat-9d695.firebaseio.com',
  projectId: 'friendlychat-9d695',
  storageBucket: 'friendlychat-9d695.appspot.com',
  messagingSenderId: '624915641711',
  appId: '1:624915641711:web:8e60a585cd7b6cdec1a49a',
  measurementId: 'G-26N6BQLE9D'
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
  //  Initialize angFireApp
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

