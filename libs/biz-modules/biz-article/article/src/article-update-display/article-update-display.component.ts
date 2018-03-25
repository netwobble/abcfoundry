import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from "@abcfoundry/biz-modules/biz-article/article/src/+store/article-store.interfaces";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'abc-article-update-display',
  templateUrl: './article-update-display.component.html',
  styleUrls: ['./article-update-display.component.scss']
})
export class ArticleUpdateDisplayComponent implements OnInit {
  @Input() article: Article;
  @Output() onAdd = new EventEmitter<Article>();
  @Output() remove = new EventEmitter<Article>();

  articleForm: FormGroup;
  articleId;
  editMode = true;


  constructor() {}

  ngOnInit() {
    // console.log('In Article-Read-Display ', this.article.id)
    this.formInit();


  }
private formInit() {

    let articleStatus = '';
    let articleUpdated = '';
    let articleTitle = '';
    let articleSummary = '';
    let articleTags = '';
    let articleLink = '';
    let articleSection = '';
    let articleSection2 = '';

    if (this.editMode) {

      articleStatus = this.article.status;
      articleUpdated = this.article.updatedAt;
      articleTitle = this.article.title;
      articleSummary = this.article.summary;
      articleTags = this.article.tags;
      articleLink = this.article.links;
      articleSection = this.article.section;
      articleSection2 = this.article.section2;

    }

  this.articleForm = new FormGroup({
    'selectArticleStatus': new FormControl(articleStatus),
    'selectArticleUpdated': new FormControl(articleUpdated),
    'inputArticleTitle': new FormControl(articleTitle),
    'textareaArticleSummary': new FormControl(articleSummary),
    'inputArticleTags': new FormControl(articleTags),
    'inputArticleLink': new FormControl(articleLink),
    'textareaArticleSection': new FormControl(articleSection),
    'textareaArticleSection2': new FormControl(articleSection2),

  });

}

  onSubmit() {
    console.log(this.articleForm);
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

  get summary() {
    return this.article.summary;
  }
  get section() {
    return this.article.section;
  }
}
