import { EntityState } from '@ngrx/entity';

export interface ArticleStore extends EntityState<Article> {
  loaded?: boolean;
  loading?: boolean;
  selectedArticleId: string;
}

export interface ArticleStoreState {
  readonly articleStore: ArticleStore;
}

export interface Article {
  id?: string;
  title?: string;
  summary?: string;
  tags?: string;
  links?: string;
  category?: string;
  updatedAt?: string;
  createdAt?: string;
  status?: string;
  section?: string;
  section2?: string;
}
