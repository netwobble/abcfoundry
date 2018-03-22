import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCreateDisplayComponent } from './article-create-display.component';

describe('ArticleCreateDisplayComponent', () => {
  let component: ArticleCreateDisplayComponent;
  let fixture: ComponentFixture<ArticleCreateDisplayComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ArticleCreateDisplayComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCreateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
