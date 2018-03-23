import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '@abcfoundry/biz-modules/biz-article/article/src/+store/article-store.interfaces';

@Component({
  selector: 'abc-article-read-display',
  templateUrl: './article-read-display.component.html',
  styleUrls: ['./article-read-display.component.scss']
})
export class ArticleReadDisplayComponent implements OnInit {
  @Input() article: Article;
  @Output() add = new EventEmitter<Article>();
  @Output() remove = new EventEmitter<Article>();

  constructor() {}

  ngOnInit() {
    // console.log('In Article-Read-Display ', this.article.id)
  }

  /**
   * Tip: Utilize getters to keep templates clean
   */
  get id() {
    return this.article.id;
  }

  get title() {
    return this.article.title;
  }

  get description() {
    return this.article.description;
  }
  get content() {
    return this.article.content;
  }
}
