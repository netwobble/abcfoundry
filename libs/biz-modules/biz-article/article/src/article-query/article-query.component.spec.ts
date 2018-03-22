import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleQueryComponent } from './article-query.component';

describe('ArticleQueryComponent', () => {
  let component: ArticleQueryComponent;
  let fixture: ComponentFixture<ArticleQueryComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ArticleQueryComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
