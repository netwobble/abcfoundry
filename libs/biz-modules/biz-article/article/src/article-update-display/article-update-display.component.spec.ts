import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleUpdateDisplayComponent } from './article-update-display.component';

describe('ArticleUpdateDisplayComponent', () => {
  let component: ArticleUpdateDisplayComponent;
  let fixture: ComponentFixture<ArticleUpdateDisplayComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ArticleUpdateDisplayComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleUpdateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
