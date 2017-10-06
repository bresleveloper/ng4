import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
//import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFireAuth } from 'angularfire2/auth'
import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase/app'

@Injectable()
export class Firebase2Service {
    user: Observable<firebase.User>;
    items: FirebaseListObservable<any[]>;
    msgVal: string = '';

    constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase){
        this.items = af.list('/messages', {
        query: {
            limitToLast: 50
        }
        });//end af
        this.user = this.afAuth.authState;
        console.log('Firebase2Service constructor done')
    }//end ctor

    login(){
        this.afAuth.auth.signInAnonymously()
            .catch(function(error){
                var errorMessage = error.message;

                var errJ = JSON.parse(errorMessage)

                console.log(errJ);
            });
    }

    logout(){
        this.afAuth.auth.signOut();
    }

    Send(desc: string){
        this.items.push({ message: desc });
        this.msgVal = '';
    }

}
  