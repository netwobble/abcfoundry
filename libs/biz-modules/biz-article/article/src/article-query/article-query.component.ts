import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as actions from '../+store/article-store.actions';
import * as fromReducer from '../+store/article-store.reducer';
import * as fromArticle from '../+store/article-store.interfaces';

@Component({
  selector: 'article-query',
  templateUrl: './article-query.component.html',
  styleUrls: ['./article-query.component.scss']
})
export class ArticleQueryComponent implements OnInit {
  articles$: Observable<any>;

  constructor(private store: Store<fromArticle.ArticleStore>) {
    this.articles$ = this.store.select(fromReducer.getAllArticles);
    console.log('In Article Query calling store');
  }

  ngOnInit() {
    this.store.dispatch(new actions.Query());
  }
}
