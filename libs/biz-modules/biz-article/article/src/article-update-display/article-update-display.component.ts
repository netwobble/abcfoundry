import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '@abcfoundry/biz-modules/biz-article/article/src/+store/article-store.interfaces';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'abc-article-update-display',
  templateUrl: './article-update-display.component.html',
  styleUrls: ['./article-update-display.component.scss']
})
export class ArticleUpdateDisplayComponent implements OnInit {
  @Input() article: Article;
  @Input() editMode;
  @Output() onAdd = new EventEmitter<Article>();
  @Output() onRemove = new EventEmitter<Article>();

  articleForm: FormGroup;
  sections: FormArray ;
  articleId;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // console.log('In Article-Read-Display ', this.article.id)
    this.formInit();
  }
  private formInit() {
    let articleId = '';
    let articleStatus = '';
    let articleUpdated = '';
    let articleTitle = '';
    let articleSummary = '';
    let articleTags = '';
    let articleLink = '';
    let articleSection = '';
    let articleSection2 = '';

    if (this.editMode) {
      articleId = this.article.id;
      articleStatus = this.article.status;
      articleUpdated = this.article.updatedAt;
      articleTitle = this.article.title;
      articleSummary = this.article.summary;
      articleTags = this.article.tags;
      articleLink = this.article.links;
      articleSection = this.article.section;
      articleSection2 = this.article.section2;
    }

    this.articleForm = this.formBuilder.group({
      status: [ articleStatus , Validators.required],
      updated: [articleUpdated],
      title: [articleTitle],
      summary: [articleSummary],
      tags: [articleTags],
      links: [articleLink],
      sections: this.formBuilder.array([ this.createSection() ])
    })

/*    if (this.editMode) {
      //take care if IDs in Edit mode
      this.articleForm.addControl('id', new FormControl(articleId, Validators.required));
      // this.articleForm.addControl('articleId', new FormControl('', Validators.required));
    }*/


/*    this.articleForm = new FormGroup({
      status: new FormControl(articleStatus),
      updated: new FormControl(articleUpdated),
      title: new FormControl(articleTitle),
      summary: new FormControl(articleSummary),
      tags: new FormControl(articleTags),
      links: new FormControl(articleLink),
      sections: new FormArray([]),
      section: new FormControl(articleSection),
      section2: new FormControl(articleSection2)
    });*/

      //

      if (this.editMode) {
        //take care if IDs in Edit mode
        this.articleForm.addControl('id', new FormControl(articleId, Validators.required));
        // this.articleForm.addControl('articleId', new FormControl('', Validators.required));
       }


  }

  onSubmit() {
    console.log(this.articleForm);
  }


  createSection(): FormGroup {
    return this.formBuilder.group({
      section: ['']
    });
  }

  onAddSection() {

    // control refers to your formarray
    const control = <FormArray>this.articleForm.controls['sections'];
    // add new formgroup
    control.push(this.createSection());
  }

  onRemoveSection(index: number) {
    // control refers to your formarray
    const control = <FormArray>this.articleForm.controls['sections'];
    // remove the chosen row
    control.removeAt(index);
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
