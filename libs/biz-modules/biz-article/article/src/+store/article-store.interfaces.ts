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
  name?: string;
  description?: string;
  content?: string;
  title?: string;
  category?: string;
  updatedAt?: Date;
  createdAt?: string;
  status?: string;
  size?: string;
}
