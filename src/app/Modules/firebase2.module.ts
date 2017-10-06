import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
export const firebaseConfig = {
  apiKey: "AIzaSyBrkzlfq144WRCw8INz7RVAaunoCtKP2xI",
  authDomain: "what-we-do-1026b.firebaseapp.com",
  databaseURL: "https://what-we-do-1026b.firebaseio.com",
  projectId: "what-we-do-1026b",
  storageBucket: "what-we-do-1026b.appspot.com",
  messagingSenderId: "986267450960"
}

@NgModule({
    imports: [
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule,
      AngularFireAuthModule
    ],
  })
  export class Firebase2Module { }