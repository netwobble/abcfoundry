import {Injectable, OnInit} from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';


import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {FirestoreUtilService} from "@abcfoundry/common/utilities/firebase-utils/src/firestore-util.service";
import {Article} from "./article-store.interfaces";



@Injectable()
export class BizArticleService implements OnInit{


  articleCollection: AngularFirestoreCollection<Article>;
  articles$: Observable<Article[]>;

  articleDocument:   AngularFirestoreDocument<Article>;




  constructor(public db: FirestoreUtilService, private afs: AngularFirestore) {

  }

  ngOnInit() {
   // call db
 // this.articles$ = this.db.colWithIds$('article');
  }



  getArticles(): Observable<Article[]> {
    return this.articleCollection
      .valueChanges()
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }



  getSnapshot(): Observable<Article[]> {
    // ['added', 'modified', 'removed']
    return this.articleCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Article;
        return { id: a.payload.doc.id, name: data.name, key: data.key, time: data.time };
      });
    });
  }



/*

  getArticle(id: string)<Article> {
    return this.afs
      .doc<Article>(`articles/${id}`)
      .valueChanges();
  }
*/

  createArticle(payload: Article) {
    return this.articleCollection
      .add(payload);
   //   .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

/*
  updateArticle(payload: Article): Observable<Article> {
    return this.getArticle({article.id}).update(data)
      .put<Article>(`/api/articles/${payload.id}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
*/

/*  removeArticle(payload: Article): Observable<Article> {
    return this.http
      .delete<any>(`/api/articles/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }*/



}
