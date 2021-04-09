import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FireBaseService {
  booksRef: AngularFireList<any>;
  bookRef: AngularFireObject<any>;

  constructor(private db: AngularFirestore) {}

  addUser(value) {
    return this.db.collection('users').add(value);
  }

  getUsers() {
    return this.db.collection('users').snapshotChanges();
  }

  updateUser(id, data) {
    return this.db.doc('users/' + id).update(data);
  }

  deleteUser(id) {
    return this.db.doc('users/' + id).delete();
  }
}
