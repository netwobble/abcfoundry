import { ArticleStore } from './article-store.interfaces';
import * as fromAdapter from './article-store.adapter';

export const articleStoreInitialStateWithout: ArticleStore = fromAdapter.articleAdapter.getInitialState({
  selectedArticleId: null,
  loading: false,
  loaded: false
});

/*
export const initialState: ArticleStore = articleAdapter.getInitialState({
  loading: false,
  loaded: false,
  selectedArticleId: null
});*/
