
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
// import { take } from 'rxjs/operator/take';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/throw';
import * as firebase from 'firebase/app';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';



// Custom Types

type CollectionPredicate<T>   = string |  AngularFirestoreCollection<T>;
type DocPredicate<T> = string |  AngularFirestoreDocument<T>;

@Injectable()
export class FirestoreUtilService {

  constructor(private afs: AngularFirestore) {}

// Return a reference
  col<T>(ref: CollectionPredicate<T>, queryFn?): AngularFirestoreCollection<T> {
    return typeof ref === 'string' ? this.afs.collection<T>(ref, queryFn) : ref
  }
  doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === 'string' ? this.afs.doc<T>(ref) : ref
  }
  // Return an Observable
  doc$<T>(ref:  DocPredicate<T>): Observable<T> {
    return this.doc(ref).snapshotChanges().map(doc => {
      return doc.payload.data() as T;
    });
  }
  col$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<T[]> {
    return this.col(ref, queryFn).snapshotChanges().map(docs => {
      return docs.map(a => a.payload.doc.data()) as T[];
    });
  }

  colWithIds$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<any[]> {
    return this.col(ref, queryFn).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }
// CRUD

  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }



  update<T>(ref: DocPredicate<T>, data: any) {
    return this.doc(ref).update({
      ...data,
      updatedAt: this.timestamp
    });
  }
  set<T>(ref: DocPredicate<T>, data: any) {
    const timestamp = this.timestamp
    return this.doc(ref).set({
      ...data,
      updatedAt: timestamp,
      createdAt: timestamp
    });
  }
  add<T>(ref: CollectionPredicate<T>, data) {
    const timestamp = this.timestamp
    return this.col(ref).add({
      ...data,
      updatedAt: timestamp,
      createdAt: timestamp
    });
  }

  upsert<T>(ref: DocPredicate<T>, data: any) {
    const doc = this.doc(ref).snapshotChanges().take(1).toPromise()
    return doc.then(snap => {
      return snap.payload.exists ? this.update(ref, data) : this.set(ref, data)
    });
  }


}
