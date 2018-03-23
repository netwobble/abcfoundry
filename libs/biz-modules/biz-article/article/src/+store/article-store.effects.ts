import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Article } from './article-store.interfaces';
import * as articleActions from './article-store.actions';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { switchMap, mergeMap, map } from 'rxjs/operators';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class ArticleStoreEffects {
  @Effect()
  query$: Observable<Action> = this.actions$.ofType(articleActions.QUERY).pipe(
    switchMap(action => {
      console.log('****** In Effects Module query$', action);
      return this.afs
        .collection<Article>('articles', ref => {
          return ref.where('status', '==', 'active');
        })
        .stateChanges();
    }),
    mergeMap(actions => actions),
    map(action => {
      console.log('****** 2 In Effects Module query$', action);
      return {
        type: `[Article] ${action.type}`,
        payload: {
          id: action.payload.doc.id,
          ...action.payload.doc.data()
        }
      };
    })
  );

  /*  read$: Observable<Action> = this.actions$.ofType(articleActions.READ).pipe(
    switchMap(action => {
      console.log('****** In Effects Module read$', action);
      const id = action.type.id
      return this.afs.doc<Article>(`articles/${data.id}`)

    })
  );*/

  @Effect()
  update$: Observable<Action> = this.actions$.ofType(articleActions.UPDATE).pipe(
    map((action: articleActions.Update) => action),
    switchMap(data => {
      const ref = this.afs.doc<Article>(`articles/${data.id}`);
      return Observable.fromPromise(ref.update(data.changes));
    }),
    map(() => new articleActions.Success())
  );

  constructor(private actions$: Actions, private afs: AngularFirestore) {}
}
