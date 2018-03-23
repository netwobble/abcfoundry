import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import * as actions from '../+store/article-store.actions';
import * as fromReducer from '../+store/article-store.reducer';
import * as fromArticle from '../+store/article-store.interfaces';
import { Article } from '../+store/article-store.interfaces';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'abc-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.scss']
})
export class ArticleUpdateComponent implements OnInit, OnDestroy {
  actionsSubscription: Subscription;
  article$: Observable<Article>;

  constructor(private route: ActivatedRoute, private store: Store<fromArticle.ArticleStore>) {
    this.actionsSubscription = route.params.pipe(map(params => new actions.SelectedID(params.id))).subscribe(store);

    // this.article$ = store.pipe(select(fromReducer.getSelectedArticle));
    this.article$ = store.pipe(select(fromReducer.getCurrentArticle));
    console.log('in Article-Read with article ', this.article$);
  }

  ngOnInit() {}

  addToCollection(article: Article) {
    //  this.store.dispatch(new collection.AddBook(book));
    console.log('addToCollection the Article with title of: ', article.title);
  }

  removeFromCollection(article: Article) {
    //  this.store.dispatch(new collection.AddBook(book));
    console.log('removeToCollection the Article with title of: ', article.title);
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
}
