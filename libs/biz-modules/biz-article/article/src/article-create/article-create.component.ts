import { Component, OnInit } from '@angular/core';
import { Article } from '@abcfoundry/biz-modules/biz-article/article/src/+store/article-store.interfaces';
import * as actions from '@abcfoundry/biz-modules/biz-article/article/src/+store/article-store.actions';
import * as fromArticle from '@abcfoundry/biz-modules/biz-article/article/src/+store/article-store.interfaces';
import { Store } from '@ngrx/store';

@Component({
  selector: 'article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {
  editMode = false;

  constructor(private store: Store<fromArticle.ArticleStore>) {}

  ngOnInit() {}

  addArticle(article: Article) {
    //  this.store.dispatch(new collection.AddBook(book));
    console.log(
      '**** In Article Create Component calling function - addArticle the Article title of: ',
      article.title
    );
    this.store.dispatch(new actions.Create(article));
  }
  cancelArticle(article: Article) {
    //  this.store.dispatch(new collection.AddBook(book));
    console.log(
      '**** In Article Create Component calling function - addArticle the Article title of: ',
      article.title
    );
    // this.store.dispatch(new actions.Update(article.id, article));
  }
}
