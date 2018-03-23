import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../+store/article-store.actions';
import * as fromArticle from '../+store/article-store.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../+store/article-store.interfaces';

@Component({
  selector: 'abc-article-query-display',
  templateUrl: './article-query-display.component.html',
  styleUrls: ['./article-query-display.component.scss']
})
export class ArticleQueryDisplayComponent implements OnInit {
  @Input() articles: Article[];
  manageMode: 'READ';

  constructor(private store: Store<fromArticle.ArticleStore>, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  readArticle(article) {
    console.log('Action for read');
    this.store.dispatch(new actions.Read(article));
    this.router.navigate(['../read', article], { relativeTo: this.route });
  }

  readArticleByID(articleId) {
    this.store.dispatch(new actions.SelectedID(articleId));
    this.router.navigate(['../read'], { relativeTo: this.route });
  }

  updateArticle(id, status) {
    this.store.dispatch(new actions.Update(id, { status }));
  }
  inactiveArticle(id, status) {
    this.store.dispatch(new actions.Update(id, { status }));
  }

  removeArticle(id, status) {
    this.store.dispatch(new actions.Update(id, { status }));
  }
}
