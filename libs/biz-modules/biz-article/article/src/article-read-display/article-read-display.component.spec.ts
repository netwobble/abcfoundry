import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleReadDisplayComponent } from './article-read-display.component';

describe('ArticleReadDisplayComponent', () => {
  let component: ArticleReadDisplayComponent;
  let fixture: ComponentFixture<ArticleReadDisplayComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ArticleReadDisplayComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleReadDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
