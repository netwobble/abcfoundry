import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleQueryDisplayComponent } from './article-query-display.component';

describe('ArticleQueryDisplayComponent', () => {
  let component: ArticleQueryDisplayComponent;
  let fixture: ComponentFixture<ArticleQueryDisplayComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ArticleQueryDisplayComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleQueryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
